import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
const baseURL = 'https://garage-kita.herokuapp.com';
// const baseURLDev = 'http://localhost:8080';

export const getDeals = createAsyncThunk('deals/getDeals', async () => {
  return await axios({
    method: 'GET',
    url: `${baseURL}/deals`,
    headers: {
      access_token: localStorage.getItem('access_token')
    },
  });
});

export const getDealsById = createAsyncThunk('deals/getDealsById', async (id) => {
  return await axios({
    method: 'GET',
    url: `${baseURL}/deals/${id}`,
    headers: {
      access_token: localStorage.getItem('access_token')
    },
  });
});

export const deleteBid = createAsyncThunk('deals/deleteBid', async (id) => {
  return await axios({
    method: 'DELETE',
    url: `${baseURL}/deals/${id}`,
    headers: {
      access_token: localStorage.getItem('access_token')
    },
  });
});

const dealSlice = createSlice({
  name: 'deals',
  initialState: {
    loading: false,
    error: false,
    dealsData: []
  },

  reducers: {},

  extraReducers: {
    [getDeals.pending]: (state) => {
      state.loading = true;
    },
    [getDeals.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data
    },
    [getDeals.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    //get deals by Id
    [getDealsById.pending]: (state) => {
      state.loading = true;
    },
    [getDealsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data
    },
    [getDealsById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    //delete bid
    [deleteBid.pending]: (state) => {
      state.loading = true;
    },
    [deleteBid.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dealsData = payload.data
    },
    [deleteBid.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  }
});

export default dealSlice.reducer;