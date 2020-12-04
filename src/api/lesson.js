import request from '@/utils/request'
import axios from 'axios'

export function addLesson(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/lesson/addLesson',
    method: 'post',
    data
  })
}

export function updateLesson(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/lesson/update',
    method: 'post',
    data
  })
}

export function getLesson(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock2/361581/3888886',
    method: 'post',
    data
  })
}

export function deleteLesson(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/lesson/delete',
    method: 'post',
    data
  })
}

export function updateLessonURL(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/updateurl',
    method: 'post',
    data
  })
}

export function isLiveUrl(data) {
  return request({
    url: 'http://127.0.0.1:4523/mock/361581/setLessonType',
    method: 'post',
    data
  })
}