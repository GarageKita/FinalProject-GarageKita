import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const postProduct = createAsyncThunk('product/post', async (payload, thunkAPI) => {
  const response = await axios({
    method: 'post',
    url: baseURL + '/products',
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyProducts()).then(() => thunkAPI.dispatch(getProducts()));
  return response;
});

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/products',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getProductById = createAsyncThunk('product/getById', async (id) => {
  return await axios({
    method: 'get',
    url: baseURL + '/products/' + id,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getMyProducts = createAsyncThunk('product/getMyProducts', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/products/myproducts',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editProduct = createAsyncThunk('product/put', async ({ id, payload }, thunkAPI) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/products/' + id,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI
    .dispatch(getMyProducts())
    .then(() => thunkAPI.dispatch(getProductById(payload.product_id)))
    .then(() => thunkAPI.dispatch(getProducts()));
  return response;
});

export const deleteProduct = createAsyncThunk('product/delete', async (id) => {
  return await axios({
    method: 'delete',
    url: baseURL + '/products/' + id,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    error: false,
    rawProducts: [],
    products: [],
    rawMyProducts: [],
    myProducts: [],
    productById: {},
  },

  reducers: {
    filterProducts(state, { payload }) {
      if (payload.length > 0) {
        const filtered = [];
        payload.forEach((category) => {
          state.products = state.rawProducts;
          state.products = state.products.filter((product) => {
            return product.Category.name == category;
          });
          state.products.forEach((el) => {
            filtered.push(el);
          });
        });
        state.products = filtered;
      } else {
        state.products = state.rawProducts;
      }
    },

    filterMyProducts(state, { payload }) {
      if (payload.length > 0) {
        const filtered = [];
        payload.forEach((category) => {
          state.myProducts = state.rawMyProducts;
          state.myProducts = state.myProducts.filter((product) => {
            return product.Category.name == category;
          });
          state.myProducts.forEach((el) => {
            filtered.push(el);
          });
        });
        state.myProducts = filtered;
      } else {
        state.myProducts = state.rawMyProducts;
      }
    },
  },

  extraReducers: {
    // get all products
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rawProducts = state.products = payload.data.data;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get product by id
    [getProductById.pending]: (state) => {
      state.productById = {};
      state.loading = true;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.productById = payload.data.data;
    },
    [getProductById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get my products
    [getMyProducts.pending]: (state) => {
      state.loading = true;
    },
    [getMyProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rawMyProducts = state.myProducts = payload.data.data;
    },
    [getMyProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new product
    [postProduct.pending]: (state) => {
      state.loading = true;
    },
    [postProduct.fulfilled]: (state) => {
      state.loading = false;
    },
    [postProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // edit product
    [editProduct.pending]: (state) => {
      state.loading = true;
    },
    [editProduct.fulfilled]: (state, response) => {
      console.log(response);
      state.loading = false;
    },
    [editProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete product
    [deleteProduct.pending]: (state) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, { meta: { arg } }) => {
      state.loading = false;
      state.rawMyProducts = state.myProducts = state.myProducts.filter((el) => el.id !== arg);
    },
    [deleteProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { filterProducts, filterMyProducts } = productSlice.actions;
export default productSlice.reducer;
