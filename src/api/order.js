import request from '@/utils/request'

export function getOrderList(data) {
  return request({
    url: '/order/list',
    method: 'post',
    data
  })
}
