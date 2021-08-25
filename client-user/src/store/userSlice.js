import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garagekita-db-server.herokuapp.com';

export const registerPost = createAsyncThunk('user/registerPost', async (payload) => {
  return await axios({
    method: 'post',
    url: baseURL + '/register',
    data: payload,
  });
});

export const loginPost = createAsyncThunk('user/loginPost', async (payload) => {
  return await axios({
    method: 'post',
    url: baseURL + '/login',
    data: payload,
  });
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: false,
  },

  reducers: {},

  extraReducers: {
    [loginPost.pending]: (state) => {
      state.loading = true;
    },
    [loginPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      localStorage.setItem('access_token', payload.data.access_token);
    },
    [loginPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [registerPost.pending]: (state) => {
      state.loading = true;
    },
    [registerPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [registerPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
