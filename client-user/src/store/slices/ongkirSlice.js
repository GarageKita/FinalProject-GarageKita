import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://garage-kita.herokuapp.com';

export const allProvinces = createAsyncThunk('ongkir/allProvinces', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/ongkir/province',
  });
});

export const allCities = createAsyncThunk('ongkir/allCities', async () => {
  return await axios({
    method: 'get',
    url: baseURL + '/ongkir/city',
  });
});

export const allCitiesInProvince = createAsyncThunk('ongkir/allCitiesInProvince', async (provinceId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/ongkir/city?province=' + provinceId,
  });
});

export const provinceById = createAsyncThunk('ongkir/provinceById', async (provinceId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/ongkir/province?id=' + provinceId,
  });
});

export const cityById = createAsyncThunk('ongkir/cityById', async (cityId) => {
  return await axios({
    method: 'get',
    url: baseURL + '/ongkir/city?id=' + cityId,
  });
});

export const ongkirCost = createAsyncThunk('ongkir/cost', async (payload) => {
  console.log(payload);
  return await axios({
    method: 'post',
    url: baseURL + '/ongkir/cost',
    data: payload,
    headers: {
      key: '08116d670347b3667b53c90946e81a62',
    },
  });
});

const ongkirSlice = createSlice({
  name: 'ongkir',
  initialState: {
    provinces: [],
    cities: [],
    citiesInProvince: [],
    cityById: {},
    provinceById: {},
    loading: false,
    ongkir: 0,
    cityOrigin: '',
    provinceOrigin: '',
    typeOrigin: '',
  },

  reducers: {},

  extraReducers: {
    [ongkirCost.pending]: (state) => {
      state.loading = true;
    },
    [ongkirCost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ongkir = payload.data.results.results[0].costs[0].cost[0].value;
      state.typeOrigin = payload.data.results.origin_details.type;
      state.cityOrigin = payload.data.results.origin_details.city_name;
      state.provinceOrigin = payload.data.results.origin_details.province;
    },
    [ongkirCost.rejected]: (state) => {
      state.loading = false;
    },

    [allProvinces.pending]: (state) => {
      state.loading = true;
    },
    [allProvinces.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.provinces = payload.data.results;
    },
    [allProvinces.rejected]: (state) => {
      state.loading = false;
    },

    [allCities.pending]: (state) => {
      state.loading = true;
    },
    [allCities.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cities = payload.data.results;
    },
    [allCities.rejected]: (state) => {
      state.loading = false;
    },

    [allCitiesInProvince.pending]: (state) => {
      state.loading = true;
    },
    [allCitiesInProvince.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.citiesInProvince = payload.data.results;
    },
    [allCitiesInProvince.rejected]: (state) => {
      state.loading = false;
    },

    [provinceById.pending]: (state) => {
      state.loading = true;
    },
    [provinceById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.provinceById = payload.data.results;
    },
    [provinceById.rejected]: (state) => {
      state.loading = false;
    },

    [cityById.pending]: (state) => {
      state.loading = true;
    },
    [cityById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cityById = payload.data.results;
    },
    [cityById.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default ongkirSlice.reducer;
