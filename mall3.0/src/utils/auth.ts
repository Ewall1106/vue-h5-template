import Cookies from 'js-cookie'

const key = 'VueH5TemplateToken'

export function getToken() {
  return Cookies.get(key)
}

export function setToken(token: string) {
  return Cookies.set(key, token, { expires: 15 })
}

export function removeToken() {
  return Cookies.remove(key)
}

export function getCsrfToken() {
  return Cookies.get('csrfToken')
}
