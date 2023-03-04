import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://82.156.69.32:5015/home/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://82.156.69.32:5015/home/user',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'http://82.156.69.32:5015/home/logout',
    method: 'post'
  })
}
