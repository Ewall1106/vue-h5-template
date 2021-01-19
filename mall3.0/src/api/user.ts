import request from '@/utils/request'

// 获取基本用户信息
export function getInfo(): Promise<any> {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

// 登录
export function login(data: any): Promise<any> {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
