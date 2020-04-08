import { getAddress } from '@/api/address'

const state = {
  defaultId: '',
  addressList: [],
  selectedAddress: {}
}

const mutations = {
  SET_DEFAULT_ID: (state, id) => {
    state.defaultId = id
  },
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
