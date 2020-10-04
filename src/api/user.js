import request from '@/utils/request'

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function setRegistry(data) {
  return request({
    url: '/user/registry',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
