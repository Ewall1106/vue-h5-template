import request from "@/utils/request";

// 获取基本用户信息
export function getInfo() {
  return request({
    url: "/user/info",
    method: "get",
  });
}

// 注册
export function signup(data) {
  return request({
    url: "/user/signup",
    method: "post",
    data,
  });
}

// 登录
export function signin(data) {
  return request({
    url: "/user/signin",
    method: "post",
    data,
  });
}
