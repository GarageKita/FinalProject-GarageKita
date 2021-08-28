import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const getCategories = createAsyncThunk('categories/get', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/categories',
  });
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: false,
  },

  reducers: {},

  extraReducers: {
    // get my requests
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.data.data;
    },
    [getCategories.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default categorySlice.reducer;
