import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://garage-kita.herokuapp.com';
// const baseURLDev = 'http://localhost:8080';

export const getDeals = createAsyncThunk('deals/getDeals', async () => {
  return await axios({
    method: 'GET',
    url: `${baseURL}/deals/me`,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

export const postDeal = createAsyncThunk('deals/post', async (payload) => {
  console.log(payload);
  return await axios({
    method: 'post',
    url: baseURL + '/deals',
    data: payload,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

export const getDealsById = createAsyncThunk('deals/getDealsById', async (id) => {
  return await axios({
    method: 'GET',
    url: `${baseURL}/deals/${id}`,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

export const getSellerTransaction = createAsyncThunk('deals/getSellerTransaction', async () => {
  return await axios({
    method: 'GET',
    url: `${baseURL}/deals/seller`,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

export const updateShipping = createAsyncThunk('deals/updateShipping', async ({ id, data }) => {
  return await axios({
    method: 'PATCH',
    url: `https://garagekita-dealtransaction.herokuapp.com/deals/shipping/${id}`,
    data: data,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

export const deleteDeal = createAsyncThunk('deals/deleteDeal', async (id) => {
  return await axios({
    method: 'DELETE',
    url: `${baseURL}/deals/${id}`,
    headers: {
      access_token: localStorage.getItem('access_token'),
    },
  });
});

const dealSlice = createSlice({
  name: 'deals',
  initialState: {
    loading: false,
    error: false,
    dealsData: [],
  },

  reducers: {},

  extraReducers: {
    [getDeals.pending]: (state) => {
      state.loading = true;
    },
    [getDeals.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data;
    },
    [getDeals.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [postDeal.pending]: (state) => {
      state.loading = true;
    },
    [postDeal.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [postDeal.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    //get deals by Id
    [getDealsById.pending]: (state) => {
      state.loading = true;
    },
    [getDealsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data;
    },
    [getDealsById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    //delete bid
    [deleteDeal.pending]: (state) => {
      state.loading = true;
    },
    [deleteDeal.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data;
    },
    [deleteDeal.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    
    //get seller deal
    [getSellerTransaction.pending]: (state) => {
      state.loading = true;
    },
    [getSellerTransaction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data;
    },
    [getSellerTransaction.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // Update shipping
    [updateShipping.pending]: (state) => {
      state.loading = true;
    },
    [updateShipping.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data;
    },
    [updateShipping.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default dealSlice.reducer;
