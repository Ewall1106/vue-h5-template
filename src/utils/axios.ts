import axios, { AxiosInstance } from 'axios'
// eslint-disable-next-line
import { getToken, getCsrfToken } from '@/utils/auth'
import store from '@/store'

// eslint-disable-next-line
const config = require('../../config')
const { baseURL } = config[process.env.NODE_ENV]

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000
  // withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.getToken) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    // config.headers['x-csrf-token'] = getCsrfToken()
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
    if (res.code !== 200) {
      return Promise.reject(res)
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
