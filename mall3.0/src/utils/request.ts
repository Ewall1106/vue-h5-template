import { AxiosRequestConfig } from 'axios'
import service from './axios'

interface BaseResponse<T> {
  code: number
  status: boolean
  data: T
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(res => {
      const data = res.data
      if (data.code === 200) {
        resolve(data)
      } else {
        console.log(data.message)
        reject(data)
      }
    })
  })
}

export default request
