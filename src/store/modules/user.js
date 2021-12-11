import { signin, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(),
  uid: "",
  userInfo: {},
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_INFO: (state, info) => {
    state.userInfo = info;
    state.uid = info.uid;
  },
};

const actions = {
  // 登录
  signin({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      signin(loginInfo)
        .then((res) => {
          const token = res.data;
          commit("SET_TOKEN", token);
          setToken(token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 登出
  logout({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  },

  // 获取基本用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((res) => {
          const data = res.data;
          if (!data) {
            reject(new Error("获取基本信息失败，请重新登录"));
          }
          commit("SET_USER_INFO", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 重置token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
