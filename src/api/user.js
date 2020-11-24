import request from '@/utils/request'
// import axios from 'axios'
// export function login(data) {
//   console.log(data)
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
export function login(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
