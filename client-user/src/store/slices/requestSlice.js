import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const getMyRequests = createAsyncThunk('request/getMyRequest', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/requests/myrequests',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const getRequestById = createAsyncThunk('request/getById', async (id) => {
  return await axios({
    method: 'get',
    url: baseURL + '/requests/' + id,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const postRequest = createAsyncThunk('request/post', async (payload) => {
  return await axios({
    method: 'post',
    url: baseURL + '/requests',
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const editRequest = createAsyncThunk('request/put', async (id, payload) => {
  return await axios({
    method: 'put',
    url: baseURL + '/requests/' + id,
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

export const deleteRequest = createAsyncThunk('request/delete', async (id) => {
  return await axios({
    method: 'delete',
    url: baseURL + '/requests/' + id,
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

const requestSlice = createSlice({
  name: 'request',
  initialState: {
    loading: false,
    error: false,
    myRequests: [],
    requestById: {},
  },

  reducers: {},

  extraReducers: {
    // get my requests
    [getMyRequests.pending]: (state) => {
      state.loading = true;
    },
    [getMyRequests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myRequests = payload.data;
    },
    [getMyRequests.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get request by id
    [getRequestById.pending]: (state) => {
      state.loading = true;
    },
    [getRequestById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.requestById = payload.data;
    },
    [getRequestById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new request
    [postRequest.pending]: (state) => {
      state.loading = true;
    },
    [postRequest.fulfilled]: (state, response) => {
      console.log(response);
      state.loading = false;
    },
    [postRequest.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // edit request
    [editRequest.pending]: (state) => {
      state.loading = true;
    },
    [editRequest.fulfilled]: (state, response) => {
      console.log(response);
      state.loading = false;
    },
    [editRequest.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete request
    [deleteRequest.pending]: (state) => {
      state.loading = true;
    },
    [deleteRequest.fulfilled]: (state, response) => {
      console.log(response);
      state.loading = false;
    },
    [deleteRequest.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default requestSlice.reducer;
