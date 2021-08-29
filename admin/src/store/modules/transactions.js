import { axios } from '../index';

export default {
  namespaced: true,

  state: () => ({
    transactionData: [],
    errorMessage: '',
  }),

  mutations: {
    setTransactionData(state, payload) {
      state.transactionData = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },

  actions: {
    fetchTransactionData(context) {
      axios({
        method: 'GET',
        url: '/deals',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          console.log(result.data.data);
          context.commit('setTransactionData', result.data.data);
          context.commit('setErrorMessage', '');
        })
        .catch((err) => {
          context.commit('setErrorMessage', err.message);
          console.log(err.message);
        });
    },
  },
};
