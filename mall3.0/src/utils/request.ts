import axios from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'
import { getToken } from '@/utils/auth'

// eslint-disable-next-line
const config = require('../../config')
const { baseURL } = config[process.env.NODE_ENV]

// 创建一个axios实例
const service = axios.create({
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
      Toast(res.message)
      // 现约定 50001:无效token 50002:token过期
      if (res.code === 50001 || res.code === 50002) {
        Dialog.alert({
          title: '提示',
          message: '您还未登录或登录已过期，请重新登录'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
