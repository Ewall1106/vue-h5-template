import request from '@/utils/request'

export function getCateItems() {
  return request({
    url: '/category/items',
    method: 'get'
  })
}

export function getCateContent(data) {
  return request({
    url: '/category/content',
    method: 'post',
    data
  })
}
