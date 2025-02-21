import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persistedstate";
import user from "./modules/user.js";
Vue.use(Vuex);

const persistedStatePaths = ["user.count"];

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [
    VuexPersistence({
      paths: persistedStatePaths,
    }),
  ],
});
