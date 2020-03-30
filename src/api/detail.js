import request from '@/utils/request'

export function getDetail(data) {
  return request({
    url: '/goods/detail',
    method: 'post',
    data
  })
}
