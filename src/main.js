import Vue from "vue";

import "normalize.css/normalize.css";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

if (process.env.NODE_ENV === "development") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
