import request from '@/utils/request'

export type DetailRequest = { productId: string }
export type DetailResponse = { icon: string; name: string }[]

export function getDetail(data: DetailRequest) {
  return request<DetailResponse>({
    url: '/product/detail',
    method: 'post',
    data
  })
}
