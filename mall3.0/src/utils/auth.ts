import Cookies from 'js-cookie'

const key = 'MallToken'

export function getToken() {
  return Cookies.get(key)
}

export function setToken(token: any) {
  return Cookies.set(key, token, { expires: 15 })
}

export function removeToken() {
  return Cookies.remove(key)
}

export function getCsrfToken() {
  return Cookies.get('csrfToken')
}
// import router from './router'
// import store from './store'
