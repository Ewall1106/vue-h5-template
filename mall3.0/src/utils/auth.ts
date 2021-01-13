import Cookies from 'js-cookie'

const key = 'MallToken'

export function getToken() {
  return Cookies.get(key)
}

export function setToken(token) {
  return Cookies.set(key, token, { expires: 15 })
}

export function removeToken() {
  return Cookies.remove(key)
}
