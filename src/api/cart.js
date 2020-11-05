import request from '@/utils/request'

export function getCartList() {
  return request({
    url: '/order/cart/list',
    method: 'get'
  })
}

export function addCart(data) {
  return request({
    url: '/order/cart/add',
    method: 'post',
    data
  })
}

export function deleteCart(data) {
  return request({
    url: '/order/cart/delete',
    method: 'delete',
    data
  })
}

export function getCartNum(params) {
  return request({
    url: '/order/cart/num',
    method: 'get',
    params
  })
}

