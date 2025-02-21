import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    incrementAsync({ commit }, params) {
      commit("increment");
    },
  },
};

export default store;
