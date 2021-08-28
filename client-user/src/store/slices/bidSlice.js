import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const postBid = createAsyncThunk('bid/post', async ({ payload, productId }) => {
  const response = await axios({
    method: 'post',
    url: baseURL + '/bids/' + productId,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return response;
});

export const getMyBids = createAsyncThunk('bid/getMyBids', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/bids/mybids',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getBidsByProductId = createAsyncThunk('bid/getById', async (productId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/bids/' + productId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editBid = createAsyncThunk('bid/put', async (bid) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/bids/' + bid.id,
    data: bid,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return response;
});

export const deleteBid = createAsyncThunk('bid/delete', async (bidId) => {
  return await axios({
    method: 'delete',
    url: baseURL + '/bids/' + bidId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

const bidSlice = createSlice({
  name: 'bid',
  initialState: {
    loading: false,
    error: false,
    myBids: [],
    bidsByProductId: [],
  },

  reducers: {},

  extraReducers: {
    // get my bids
    [getMyBids.pending]: (state) => {
      state.loading = true;
    },
    [getMyBids.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myBids = payload.data.data;
    },
    [getMyBids.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get bid by product id
    [getBidsByProductId.pending]: (state) => {
      state.bidsByProductId = {};
      state.loading = true;
    },
    [getBidsByProductId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bidsByProductId = payload.data.data;
    },
    [getBidsByProductId.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new bid
    [postBid.pending]: (state) => {
      state.loading = true;
    },
    [postBid.fulfilled]: (state) => {
      state.loading = false;
    },
    [postBid.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // edit bid
    [editBid.pending]: (state) => {
      state.loading = true;
    },
    [editBid.fulfilled]: (state, response) => {
      state.loading = false;
    },
    [editBid.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete bid
    [deleteBid.pending]: (state) => {
      state.loading = true;
    },
    [deleteBid.fulfilled]: (state, { meta: { arg } }) => {
      state.loading = false;
      state.myBids = state.myBids.filter((el) => el.id !== arg);
      state.bidsByProductId = state.bidsByProductId.filter((el) => el.id !== arg);
    },
    [deleteBid.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default bidSlice.reducer;
