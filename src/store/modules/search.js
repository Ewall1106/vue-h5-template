const state = {
  searchKey: [],
};

const mutations = {
  SET_KEY(state, keyarr) {
    state.searchKey = keyarr;
    localStorage.setItem("searchKey", JSON.stringify(keyarr.slice(0, 20)));
  },
  DEL_KEY(state) {
    state.searchKey = [];
  },
};

const actions = {
  // 保存搜索词
  setKey({ commit, state }, key) {
    if (state.searchKey.length <= 0) {
      const rlt = JSON.parse(localStorage.getItem("searchKey")) || [];
      if (rlt.indexOf(key) < 0) {
        rlt.unshift(key);
        commit("SET_KEY", rlt);
      }
    } else {
      const rlt = [...state.searchKey];
      if (rlt.indexOf(key) < 0) {
        rlt.unshift(key);
        commit("SET_KEY", rlt);
      }
    }
  },
  // 删除搜索词
  delKey({ commit }) {
    localStorage.removeItem("searchKey");
    commit("DEL_KEY");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
