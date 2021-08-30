import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const postBid = createAsyncThunk('bid/post', async ({ payload, productId }, thunkAPI) => {
  console.log(payload, productId);
  const response = await axios({
    method: 'post',
    url: baseURL + '/bids/' + productId,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyBids());
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

export const getBidById = createAsyncThunk('bid/getById', async (bidId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/bids/checkbid/' + bidId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getBidsByProductId = createAsyncThunk('bid/getByProductId', async (productId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/bids/' + productId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editBid = createAsyncThunk('bid/put', async ({ id, payload }, thunkAPI) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/bids/' + id,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getBidById(id)).then(() => thunkAPI.dispatch(getMyBids()));
  return response;
});

export const deleteBid = createAsyncThunk('bid/delete', async (bidId, thunkAPI) => {
  const response = await axios({
    method: 'delete',
    url: baseURL + '/bids/' + bidId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyBids());
  return response;
});

const bidSlice = createSlice({
  name: 'bid',
  initialState: {
    loading: false,
    error: false,
    rawMyBids: [],
    myBids: [],
    bidById: {},
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
      state.rawMyBids = state.myBids = payload.data.data;
    },
    [getMyBids.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get bid by id
    [getBidById.pending]: (state) => {
      state.bidById = {};
      state.loading = true;
    },
    [getBidById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bidById = payload.data.data;
    },
    [getBidById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get bid by product id
    [getBidsByProductId.pending]: (state) => {
      state.loading = true;
    },
    [getBidsByProductId.fulfilled]: (state, { payload }) => {
      state.bidsByProductId = payload.data.data.filter((bid) => bid.status != 'rejected');
      state.loading = false;
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
    [editBid.fulfilled]: (state, { meta, payload }) => {
      state.loading = false;
      state.bidsByProductId = state.bidsByProductId.filter((el) => el.id != meta.arg.id);
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
      // state.myBids = state.myBids.filter((el) => el.id !== arg);
    },
    [deleteBid.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const { filterMyBids } = bidSlice.actions;
export default bidSlice.reducer;
