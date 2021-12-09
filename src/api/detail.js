import request from "@/utils/request";

export function getDetail(data) {
  return request({
    url: "/product/detail",
    method: "post",
    data,
  });
}
