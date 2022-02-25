import Vue from "vue";
import "normalize.css/normalize.css";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./icons";
import "./utils/permission";

import * as filters from "@/filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

import "@/components/Vant";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
