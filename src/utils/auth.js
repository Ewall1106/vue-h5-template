import Cookies from "js-cookie";

const key = "Token";

export function getToken() {
  return Cookies.get(key);
}

export function setToken(token) {
  Cookies.set("1111", "1231231", { expires: 15 });
  return Cookies.set(key, token, { expires: 15 });
}

export function removeToken() {
  return Cookies.remove(key);
}
