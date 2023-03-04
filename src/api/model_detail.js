import request from '@/utils/request'

export function getModelDetail(modelName) {
  return request({
    // 测试环境
    // url: '/vue-element-admin/model/getModel',
    // 线上环境
    url: 'http://82.156.69.32:5015/models/name/' + modelName,
    method: 'get'
  })
}
export function predict(modelName, data) {
  return request({
    // 测试环境
    // url: '/vue-element-admin/model/getModel',
    // 线上环境
    url: 'http://82.156.69.32:5015/model_server/' + modelName + '/v1/predict',
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    data: data
  })
}
