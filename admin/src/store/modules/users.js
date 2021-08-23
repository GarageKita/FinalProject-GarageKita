import { axios } from '../index';
import router from '../../router';

export default {
  namespaced: true,

  state: () => ({
    isLogin: false,
    isRegistered: false,
    errorMessage: '',
  }),

  mutations: {
    setIsRegistered(state) {
      state.isRegistered = true;
    },
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },

  actions: {
    register(context, payload) {
      // console.log(payload);
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then((result) => {
          console.log(result);
          context.commit('setIsRegistered');
          context.commit('setErrorMessage', '');
          router.push('/pages/login');
        })
        .catch((err) => {
          // context.commit('setErrorMessage', err.response.data.message);
          console.log(err.message);
        });
    },
    login(context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then((result) => {
          console.log(result);
          context.commit('setIsLogin', true);
          context.commit('setErrorMessage', '');
          localStorage.setItem('access_token', result.data.access_token);
          router.push('/');
        })
        .catch((err) => {
          // context.commit('setErrorMessage', err.response.data.message);
          console.log(err.message);
        });
    },
  },
};
