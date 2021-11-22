import { Module } from 'vuex'
import { GlobalProp } from '@/store'
import { signin, getInfo, GetInfoResponse } from '@/api'

import { getToken, setToken, removeToken } from '@/utils/auth'

export interface UserState {
  token: string | undefined
  userInfo: GetInfoResponse
}

export const user: Module<UserState, GlobalProp> = {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SING_OUT(state, token) {
      state.token = token
    },
    SET_USER_INFO(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    // 登录
    signIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        signin(payload)
          .then(res => {
            const token = res.data
            commit('SET_TOKEN', token)
            setToken(token)
            resolve(token)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 登出
    signOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve(undefined)
      })
    },
    // 获取基本用户信息
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(res => {
            const data = res.data
            commit('SET_USER_INFO', data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getUid(state) {
      return state.userInfo.uid
    },
    getToken(state) {
      return state.token
    }
  }
}
