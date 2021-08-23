import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);

export const axios = Axios.create({
  baseURL: 'https://garagekita-db-server.herokuapp.com/',
});

import users from './modules/users';
import transactions from './modules/transactions';

const mainModule = {
  state: () => ({
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    asideShow: false,
    darkMode: false,
  }),

  mutations: {
    toggleSidebarDesktop(state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
      state.sidebarShow = sidebarOpened ? false : 'responsive';
    },
    toggleSidebarMobile(state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
      state.sidebarShow = sidebarClosed ? true : 'responsive';
    },
    set(state, [variable, value]) {
      state[variable] = value;
    },
    toggle(state, variable) {
      state[variable] = !state[variable];
    },
  },
};

export default new Vuex.Store({
  state: mainModule.state,
  mutations: mainModule.mutations,

  modules: {
    users,
    transactions,
  },
});
