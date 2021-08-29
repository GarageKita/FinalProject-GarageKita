import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const getRequests = createAsyncThunk('request/getRequest', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/requests',
    headers: {
      access_token: localStorage.access_token,
    },
  });
});

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

export const postRequest = createAsyncThunk('request/post', async (payload, thunkAPI) => {
  const response = await axios({
    method: 'post',
    url: baseURL + '/requests',
    data: payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyRequests());
  return response;
});

export const editRequest = createAsyncThunk('request/put', async (data, thunkAPI) => {
  const response = await axios({
    method: 'put',
    url: baseURL + '/requests/' + data.id,
    data: data.payload,
    headers: {
      access_token: localStorage.access_token,
    },
  });
  thunkAPI.dispatch(getMyRequests());
  return response;
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
    rawRequests: [],
    requests: [],
    rawMyRequests: [],
    myRequests: [],
    requestById: {},
  },

  reducers: {
    filterAllRequests(state, { payload }) {
      if (payload.length > 0) {
        const filtered = [];
        payload.forEach((category) => {
          state.requests = state.rawRequests;
          state.requests = state.requests.filter((request) => {
            return request.Category.name == category;
          });
          state.requests.forEach((el) => {
            filtered.push(el);
          });
        });
        state.requests = filtered;
      } else {
        state.requests = state.rawRequests;
      }
    },

    filterMyRequests(state, { payload }) {
      if (payload.length > 0) {
        const filtered = [];
        payload.forEach((category) => {
          state.myRequests = state.rawMyRequests;
          state.myRequests = state.myRequests.filter((request) => {
            return request.Category.name == category;
          });
          state.myRequests.forEach((el) => {
            filtered.push(el);
          });
        });
        state.myRequests = filtered;
      } else {
        state.myRequests = state.rawMyRequests;
      }
    },
  },

  extraReducers: {
    // get all requests
    [getRequests.pending]: (state) => {
      state.loading = true;
    },
    [getRequests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rawRequests = state.requests = payload.data.data;
    },
    [getRequests.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get my requests
    [getMyRequests.pending]: (state) => {
      state.loading = true;
    },
    [getMyRequests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rawMyRequests = state.myRequests = payload.data.data;
    },
    [getMyRequests.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get request by id
    [getRequestById.pending]: (state) => {
      state.requestById = {};
      state.loading = true;
    },
    [getRequestById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.requestById = payload.data.data;
    },
    [getRequestById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // post new request
    [postRequest.pending]: (state) => {
      state.loading = true;
    },
    [postRequest.fulfilled]: (state) => {
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
    [deleteRequest.fulfilled]: (state, { meta: { arg } }) => {
      state.loading = false;
      state.rawMyRequests = state.myRequests = state.myRequests.filter((el) => el.id !== arg);
    },
    [deleteRequest.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { filterAllRequests, filterMyRequests } = requestSlice.actions;
export default requestSlice.reducer;
