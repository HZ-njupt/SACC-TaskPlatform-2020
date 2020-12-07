import request from '@/utils/request'

export function addLesson(data) {
  console.log(data);
  return request({
    // url: 'http://127.0.0.1:4523/mock/361581/lesson/addLesson',
    url: 'api/lesson/addLesson',
    method: 'post',
    // dataType:"json",
    header:{
      "content-type":'application/json'
    },
    data:JSON.stringify(data)
  })
}

export function updateLesson(data) {
  return request({
    // url: 'http://127.0.0.1:4523/mock/361581/lesson/update',
    url: 'api//lesson/update',
    method: 'post',
    data
  })
}

export function getLesson(data) {
  return request({
    // url: 'http://127.0.0.1:4523/mock2/361581/3888886',
    url: 'api/lesson/getByGroupId?groupId='+data,
    method: 'post',
    // data
  })
}

export function deleteLesson(data) {
  return request({
    // url: 'http://127.0.0.1:4523/mock/361581/lesson/delete',
    url: 'api/lesson/delete?id='+data,
    method: 'post',
  })
}

export function updateLessonURL(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/updateurl?lessonId='+data,
    method: 'post',
  })
}

export function isLiveUrl(data) {
  return request({
    // url: 'http://127.0.0.1:4523/mock/361581/setLessonType',
    url: 'api/setLessonType',
    method: 'post',
    data
  })
}