import request from '@/utils/request'

// export function getDetail() {
//   return request({
//     url: '/home/banner',
//     method: 'get'
//   })
// }

export function getDetail(data) {
  return request({
    url: '/goods/detail',
    method: 'post',
    data
  })
}
