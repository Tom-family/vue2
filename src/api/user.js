import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/login?account=138123456781&pwd=123456",
    method: "post",
  });
}
