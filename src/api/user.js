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

// 新增地址
export function addAddress(data) {
  return request({
    url: '/user/address',
    method: 'post',
    data
  })
}

// 删除地址
export function deleteAddress(data) {
  return request({
    url: '/user/address',
    method: 'delete',
    data
  })
}

// 更新地址
export function updateAddress(data) {
  return request({
    url: '/user/address',
    method: 'put',
    data
  })
}

// 获取地址
export function getAddress(params) {
  return request({
    url: '/user/address',
    method: 'get',
    params
  })
}
