import { getUserInfo } from "@/api/user";

const state = {
  userInfo: {
    name: "Loading...",
  },
};

const mutations = {
  SET_USER_INFO: (state, info) => {
    state.userInfo = info;
  },
};

const actions = {
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((res) => {
          const data = res.data;
          commit("SET_USER_INFO", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
