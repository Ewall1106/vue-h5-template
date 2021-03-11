import request from '@/utils/request'

// 获取基本用户信息
// export function getInfo(): Promise<any> {
//   return request({
//     url: '/user/info',
//     method: 'get'
//   })
// }

export type SignupRequest = {
  username: string
  password: string
  confirmPassword: string
  captcha: string
}
export type SigninRequest = {
  username: string
  password: string
}

export function signup(data: SignupRequest) {
  return request({
    url: '/user/signup',
    method: 'post',
    data
  })
}

export function signin(data: SigninRequest) {
  return request({
    url: '/user/signin',
    method: 'post',
    data
  })
}
