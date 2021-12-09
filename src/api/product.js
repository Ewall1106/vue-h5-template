import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/product/list",
    method: "post",
    data,
  });
}
