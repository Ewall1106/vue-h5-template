import request from '@/utils/request'

export function getHotList() {
  return request({
    url: '/search/hotlist',
    method: 'get'
  })
}

export function getSearchList(data) {
  return request({
    url: '/search/result',
    method: 'post',
    data
  })
}
