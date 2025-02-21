import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import VuexPersistence from "vuex-persistedstate";
import user from "./modules/user.js";
Vue.use(Vuex);

const persistedStatePaths = ["user.count", "user.token"];

export default new Vuex.Store({
  modules: {
    user,
  },
  getters,
  plugins: [
    VuexPersistence({
      paths: persistedStatePaths,
    }),
  ],
});
