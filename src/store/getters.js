const getters = {
  // base info
  uid: (state) => state.user.uid,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,

  // order
  ids: (state) => {
    const ids = state.order.ids;
    if (ids && ids.length) {
      return ids;
    } else {
      return JSON.parse(localStorage.getItem("ids")) || [];
    }
  },

  // search
  searchKey: (state) => {
    if (state.search.searchKey.length <= 0) {
      return JSON.parse(localStorage.getItem("searchKey")) || [];
    } else {
      return state.search.searchKey;
    }
  },
};

export default getters;
