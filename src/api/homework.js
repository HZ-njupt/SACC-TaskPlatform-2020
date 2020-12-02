import request from '@/utils/request'

export function getbyGroupId(params) {
  return request({
    url: '/api/homework/group',
    method: 'get',
    params: params
  })
}

export function getbyLessonId(data) {
  return request({
    url: '/api/homework/lesson',
    method: 'get',
    data
  })
}

export function PublishWork(data) {
  return request({
    url: '/api/homework/publish',
    method: 'post',
    data
  })
}

export function UpdateWork(data) {
  return request({
    url: '/api/homework/update',
    method: 'post',
    data
  })
}
