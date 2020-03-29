import request from '@/utils/request'

export function getAddress() {
  return request({
    url: '/address/list',
    method: 'get'
  })
}
