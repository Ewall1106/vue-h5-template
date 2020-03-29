const state = {
  selectedAddress: {}
}

const mutations = {
  SET_ADDRESS: (state, list) => {
    state.selectedAddress = list
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
