import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';
// const directUrl = 'http://localhost:3002'
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

export const googleOAuth = createAsyncThunk('user/googleOAuth', async (payload) => {
  return await axios({
    method: 'post',
    url: baseURL + '/oauthgoogle/login-google',
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
    [loginPost.pending]: (state, response) => {
      state.email = response.meta.arg.email;
      state.loading = true;
    },
    [loginPost.fulfilled]: (state, response) => {
      state.loading = false;
      localStorage.setItem('access_token', response.payload.data.access_token);
    },
    [loginPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [googleOAuth.pending]: (state, response) => {
      console.log('oauth pending', response)
      // state.email = response.meta.arg.email;
      state.loading = true;
    },
    [googleOAuth.fulfilled]: (state, response) => {
      console.log('oauth fulfill', response)
      state.loading = false;
      localStorage.setItem('access_token', response.payload.data.access_token);
    },
    [googleOAuth.rejected]: (state) => {
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
