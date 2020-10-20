import request from '@/utils/request'

// 获取基本用户信息
export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

// 注册
export function registry(data) {
  return request({
    url: '/user/registry',
    method: 'post',
    data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 登出
export function logout(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 重置密码
export function reset(data) {
  return request({
    url: '/user/reset',
    method: 'post',
    data
  })
}
