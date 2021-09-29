import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

const axios = Axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "https://garage-kita.herokuapp.com/"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactionData: [],
    categories: [],
    isSignIn: false,
    loading: ""
  },
  mutations: {
    SET_IS_SIGNIN(state, payload) {
      state.isSignIn = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    setTransactionData(state, payload) {
      state.transactionData = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },

    setCategories(state, payload) {
      state.categories = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    }
  },
  actions: {
    signIn(context, payload) {
      axios({
        method: "POST",
        url: "/login",
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(result => {
          context.commit("SET_IS_SIGNIN", true);
          localStorage.setItem("access_token", result.data.access_token);
          router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchTransactionData(context) {
      axios({
        method: "GET",
        url: "/deals",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result.data.data);
          context.commit("setTransactionData", result.data.data);
          context.commit("setErrorMessage", "");
        })
        .catch(err => {
          context.commit("setErrorMessage", err.message);
          console.log(err.message);
        });
    },

    getCategories(context) {
      axios({
        method: "GET",
        url: "/categories",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result.data.data);
          context.commit("setCategories", result.data.data);
          context.commit("setErrorMessage", "");
        })
        .catch(err => {
          context.commit("setErrorMessage", err.message);
          console.log(err.message);
        });
    },

    addCategory(context, payload) {
      axios({
        method: "POST",
        url: "/categories",
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(result => {
          console.log(result);
          context.dispatch("getCategories");
          // context.commit('SET_ERROR_MSG', '');
        })
        .catch(err => {
          context.commit("setErrorMessage", err.message);
          console.log(err.message);
        });
    }
  },
  getters: {
    filter: state => category => {
      return state.products.filter(el => el.category == category);
    },
    dashboard(state) {
      return state.products
        .sort((a, b) => (a["createdAt"] > b["createdAt"] ? -1 : 1))
        .slice(0, 4);
    }
  }
});
