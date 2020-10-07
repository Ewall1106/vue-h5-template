import request from '@/utils/request'

export function getCaptcha(params) {
  return request({
    url: '/public/captcha',
    method: 'get',
    params
  })
}

export function getMailCode(params) {
  return request({
    url: '/public/mail',
    method: 'post',
    params
  })
}
