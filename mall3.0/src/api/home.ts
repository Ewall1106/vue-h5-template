import request from '@/utils/request'

export function getBanner(): Promise<any> {
  return request({
    url: '/home/banner',
    method: 'get'
  })
}

export function getCategory(): Promise<any> {
  return request({
    url: '/home/category',
    method: 'get'
  })
}

export function getList(data: {
  pageSize: number
  pageNo: number
}): Promise<any> {
  return request({
    url: '/home/list',
    method: 'post',
    data
  })
}
