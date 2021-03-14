import Cookies from 'js-cookie'

// 用户cookie
const key = 'H5Token'

export function getToken() {
  return Cookies.get(key)
}

export function setToken(token: string) {
  return Cookies.set(key, token, { expires: 15 })
}

export function removeToken() {
  return Cookies.remove(key)
}

// 安全cookie
export function getCsrfToken() {
  return Cookies.get('csrfToken')
}

// 需要token才能访问
export const blackList = ['/cart', '/order/list', '/user']
