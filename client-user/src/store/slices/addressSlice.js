import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const postAddress = createAsyncThunk('address/post', async ({ payload, productId }, thunkAPI) => {
  console.log(payload, productId);
  const response = await axios({
    method: 'post',
    url: baseURL + '/address/' + productId,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyAddress());
  return response;
});

export const getMyAddress = createAsyncThunk('address/getMyAddress', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/address/myaddress',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editAddress = createAsyncThunk('address/put', async ({ id, payload }, thunkAPI) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/address/' + id,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyAddress());
  return response;
});

export const deleteAddress = createAsyncThunk('address/delete', async (id, thunkAPI) => {
  const response = await axios({
    method: 'delete',
    url: baseURL + '/address/' + id,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyAddress());
  return response;
});

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    loading: false,
    error: false,
    myCityId: '',
  },

  reducers: {},

  extraReducers: {
    // get my bids
    [getMyAddress.pending]: (state) => {
      state.loading = true;
    },
    [getMyAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myCityId = payload.data.data[0].city_id;
    },
    [getMyAddress.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new bid
    [postAddress.pending]: (state) => {
      state.loading = true;
    },
    [postAddress.fulfilled]: (state) => {
      state.loading = false;
    },
    [postAddress.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // edit bid
    [editAddress.pending]: (state) => {
      state.loading = true;
    },
    [editAddress.fulfilled]: (state, { meta, payload }) => {
      state.loading = false;
    },
    [editAddress.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete bid
    [deleteAddress.pending]: (state) => {
      state.loading = true;
    },
    [deleteAddress.fulfilled]: (state, { meta: { arg } }) => {
      state.loading = false;
    },
    [deleteAddress.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addressSlice.reducer;
