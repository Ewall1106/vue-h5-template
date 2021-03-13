import { AxiosRequestConfig } from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'
import service from './axios'

interface BaseResponse<T> {
  code: number
  status: boolean
  data: T
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      res => {
        resolve(res.data)
      },
      err => {
        switch (err?.code) {
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
          default:
            Toast(err.message)
            break
        }
        reject(err)
      }
    )
  })
}

export default request
