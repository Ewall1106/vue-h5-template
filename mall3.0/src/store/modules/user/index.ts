import { MutationTree, ActionTree } from 'vuex'
import { signin } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

import { State } from './types/state-types'
import { Mutations, Mutation } from './types/mutation-types'
import { Actions, Action } from './types/action-types'

const state: State = {
  token: getToken(),
  uid: '',
  userInfo: {}
}

const mutations: MutationTree<State> & Mutations = {
  [Mutation.SET_TOKEN](state, token: string) {
    state.token = token
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
  }
}

// const   actions = {
//   // 登录
//   [Action.SING_IN]({ commit }) {

//   }
//   // signin(context: { commit: Commit }, loginInfo) {
//   //   return new Promise((resolve, reject) => {
//   //     login(loginInfo)
//   //       .then(res => {
//   //         const { token } = res.entry
//   //         context.commit('SET_TOKEN', token)
//   //         setToken(token)
//   //         resolve()
//   //       })
//   //       .catch(error => {
//   //         reject(error)
//   //       })
//   //   })
//   }

// // 登出
// logout({ commit, state }) {
//   return new Promise((resolve, reject) => {
//     commit('SET_TOKEN', '')
//     removeToken()
//     resolve()
//   })
// },

// // 获取基本用户信息
// getInfo({ commit, state }) {
//   return new Promise((resolve, reject) => {
//     getInfo(state.token)
//       .then(res => {
//         const data = res.entry
//         if (!data) {
//           reject(new Error('获取基本信息失败，请重新登录'))
//         }
//         commit('SET_USER_INFO', data)
//         resolve(data)
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })
// },

// // 重置token
// resetToken({ commit }) {
//   return new Promise(resolve => {
//     commit('SET_TOKEN', '')
//     removeToken()
//     resolve()
//   })
// }
// }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
