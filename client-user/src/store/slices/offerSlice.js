import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const postOffer = createAsyncThunk('offer/post', async ({ payload, requestId }) => {
  const response = await axios({
    method: 'post',
    url: baseURL + '/offers/' + requestId,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return response;
});

export const getMyOffers = createAsyncThunk('offer/getMyOffers', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/offers/myoffers',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getOffersByRequestId = createAsyncThunk('offer/getById', async (requestId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/offers/' + requestId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editOffer = createAsyncThunk('offer/put', async (offer) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/offers/' + offer.id,
    data: offer,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  return response;
});

export const deleteOffer = createAsyncThunk('offer/delete', async (offerId) => {
  return await axios({
    method: 'delete',
    url: baseURL + '/offers/' + offerId,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

const offerSlice = createSlice({
  name: 'offer',
  initialState: {
    loading: false,
    error: false,
    myOffers: [],
    offersByRequestId: [],
  },

  reducers: {},

  extraReducers: {
    // get my offers
    [getMyOffers.pending]: (state) => {
      state.loading = true;
    },
    [getMyOffers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myOffers = payload.data.data;
    },
    [getMyOffers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get offer by request id
    [getOffersByRequestId.pending]: (state) => {
      state.offersByRequestId = {};
      state.loading = true;
    },
    [getOffersByRequestId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.offersByRequestId = payload.data.data;
    },
    [getOffersByRequestId.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new offer
    [postOffer.pending]: (state) => {
      state.loading = true;
    },
    [postOffer.fulfilled]: (state) => {
      state.loading = false;
    },
    [postOffer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // edit offer
    [editOffer.pending]: (state) => {
      state.loading = true;
    },
    [editOffer.fulfilled]: (state, response) => {
      state.loading = false;
    },
    [editOffer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete offer
    [deleteOffer.pending]: (state) => {
      state.loading = true;
    },
    [deleteOffer.fulfilled]: (state, { meta: { arg } }) => {
      state.loading = false;
      state.myOffers = state.myOffers.filter((el) => el.id !== arg);
      state.offersByRequestId = state.offersByRequestId.filter((el) => el.id !== arg);
    },
    [deleteOffer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default offerSlice.reducer;
