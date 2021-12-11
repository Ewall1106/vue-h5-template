import axios from "axios";
import { Toast, Dialog } from "vant";
import store from "@/store";
import { getToken } from "@/utils/auth";

const config = require("./config");
const baseURL = config[process.env.NODE_ENV].baseUrl;

const service = axios.create({
  baseURL,
  // withCredentials: true,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      Toast(res.message);
      if (res.code === 50001 || res.code === 50002) {
        Dialog.alert({
          title: "提示",
          message: "您还未登录或登录已过期，请重新登录",
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error);
    Toast(error.message);
    return Promise.reject(error);
  }
);

export default service;
