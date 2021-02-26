import axios, { AxiosInstance } from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'
import { getToken } from '@/utils/auth'

// eslint-disable-next-line
const config = require('../../config')
const { baseURL } = config[process.env.NODE_ENV]

// 创建一个axios实例
const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // JWT鉴权
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 与后端约定的错误码
    if (res.code !== 200) {
      switch (res?.code) {
        case 401:
          // token失效
          Dialog.alert({
            title: '提示',
            message: '您还未登录或登录已过期，请重新登录'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload()
            })
          })
          break
        case 403:
          // 没有权限
          break
        case 500:
          // 服务端错误
          break
        case 503:
          // 服务端错误
          break
        default:
          break
      }
      Toast(res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error)
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
