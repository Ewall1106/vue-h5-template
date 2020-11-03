const state = {
  // 要购买的商品id列表
  ids: []
}

const mutations = {
  SET_IDS(state, ids) {
    state.ids = ids
  }
}

const actions = {
  setIds({ commit, state }, ids) {
    commit('SET_IDS', ids)
    localStorage.setItem('ids', JSON.stringify(ids))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
