import { getAddress } from '@/api/address'

const state = {
  addressList: [],
  selectedAddress: {}
}

const mutations = {
  SET_ADDRESS_LIST: (state, list) => {
    state.addressList = list
  },
  SET_SELECTED_ADDRESS: (state, item) => {
    state.selectedAddress = item
  }
}

const actions = {
  // 获取地址列表
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getAddress()
        .then(res => {
          const data = res.entry
          commit('SET_ADDRESS_LIST', data)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 设置地址列表
  setList({ commit, state }, index) {
    commit('SET_SELECTED_ADDRESS', state.addressList[index])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
