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
    }
  }
});

export default dealSlice.reducer;