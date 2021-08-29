import { axios } from '../index';

export default {
  namespaced: true,

  state: () => ({
    categories: [],
    errorMessage: '',
  }),

  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },

  actions: {
    getCategories(context) {
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          console.log(result.data.data);
          context.commit('setCategories', result.data.data);
          context.commit('setErrorMessage', '');
        })
        .catch((err) => {
          context.commit('setErrorMessage', err.message);
          console.log(err.message);
        });
    },

    addCategory(context, payload) {
      axios({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token,
        },
        data: payload,
      })
        .then((result) => {
          console.log(result);
          context.dispatch('getCategories');
          // context.commit('SET_ERROR_MSG', '');
        })
        .catch((err) => {
          context.commit('setErrorMessage', err.message);
          console.log(err.message);
        });
    },
  },
};
