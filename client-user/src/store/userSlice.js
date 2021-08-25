import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

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
    email: '',
  },

  reducers: {},

  extraReducers: {
    [loginPost.pending]: (state) => {
      state.loading = true;
    },
    [loginPost.fulfilled]: (state, response) => {
      console.log(response);
      state.loading = false;
      state.email = response.meta.arg.email;
      localStorage.setItem('access_token', response.payload.data.access_token);
    },
    [loginPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [registerPost.pending]: (state) => {
      state.loading = true;
    },
    [registerPost.fulfilled]: (state) => {
      state.loading = false;
    },
    [registerPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
