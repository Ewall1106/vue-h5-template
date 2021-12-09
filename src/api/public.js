import request from "@/utils/request";

export function getCaptcha(params) {
  return request({
    url: "/public/captcha",
    method: "get",
    params,
  });
}

export function getMailCode(data) {
  return request({
    url: "/public/mail",
    method: "post",
    data,
  });
}
