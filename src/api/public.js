import request from '@/utils/request'

export function getCaptcha() {
  return request({
    url: '/public/captcha',
    method: 'get'
  })
}

export function getMailCode() {
  return request({
    url: '/public/mail',
    method: 'post'
  })
}
