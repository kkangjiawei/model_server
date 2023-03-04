import request from '@/utils/request'

export function getModel() {
  return request({
    // 测试环境
    // url: '/vue-element-admin/model/getModel',
    // 线上环境
    url: 'http://82.156.69.32:5015/models/',
    method: 'get'
  })
}
