import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    token:'',
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    incrementAsync({ commit }, params) {
      commit("increment");
    },
  },
};

export default store;
