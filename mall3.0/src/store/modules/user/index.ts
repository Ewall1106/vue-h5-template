import { MutationTree, ActionTree } from 'vuex'
import { signin, getInfo } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

import { State } from './types/state-types'
import { Mutations, Mutation } from './types/mutation-types'
import { Actions, Action } from './types/action-types'

export const state: State = {
  token: getToken(),
  userInfo: {}
}

const mutations: MutationTree<State> & Mutations = {
  [Mutation.SET_TOKEN](state, token) {
    state.token = token
  },
  [Mutation.SING_OUT](state, token) {
    state.token = token
  },
  [Mutation.SET_USER_INFO](state, info) {
    state.userInfo = info
  }
}

const actions: ActionTree<State, State> & Actions = {
  // 登录
  [Action.SING_IN]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      signin(payload)
        .then(res => {
          const token = res.data
          commit(Mutation.SET_TOKEN, token)
          setToken(token)
          resolve(token)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 登出
  [Action.SING_OUT]({ commit }) {
    return new Promise(resolve => {
      commit(Mutation.SET_TOKEN, '')
      removeToken()
      resolve()
    })
  },
  // 获取基本用户信息
  [Action.GET_INFO]({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(res => {
          const data = res.data
          commit(Mutation.SET_USER_INFO, data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
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
