import request from '@/utils/request'

export function getbyGroupId(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/homework/group',
    method: 'get',
    data
  })
}
