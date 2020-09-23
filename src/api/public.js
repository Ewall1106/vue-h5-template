import request from '@/utils/request'

export function getCaptcha() {
  return request({
    url: '/public/captcha',
    method: 'get'
  })
}
