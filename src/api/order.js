import request from "@/utils/request";

// 获取确认订单列表
export function getOrderList(data) {
  return request({
    url: "/order/list",
    method: "post",
    data,
  });
}

// 提交订单
export function settleOrder(data) {
  return request({
    url: "/order/settle",
    method: "post",
    data,
  });
}

// 我的-订单列表
export function getUserList(params) {
  return request({
    url: "/order/user-list",
    method: "get",
    params,
  });
}
