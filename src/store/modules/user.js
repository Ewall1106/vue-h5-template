import { getUserInfo } from "@/api/user";

const state = {
  userInfo: {},
};

const mutations = {
  SET_USER_INFO: (state, info) => {
    state.userInfo = info;
    state.uid = info.uid;
  },
};

const actions = {
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
