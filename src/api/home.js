import request from '@/utils/request'

export function getBanner() {
  return request({
    url: '/home/banner',
    method: 'get'
  })
}
