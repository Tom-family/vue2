import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import "./utils/rem.js";
import "./utils/vant.js";
import "./utils/permission.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
