import { getbyGroupId, getbyLessonId, PublishWork, UpdateWork } from '@/api/homework'
const state = {
  GroupWorkList: [],
  LessonWorkList: [],
  CurrentWork: {},
  lessonName: ''
}

const mutations = {
  SET_GroupList: (state, data) => {
    state.GroupWorkList = data
  },
  SET_LessonList: (state, data) => {
    state.LessonWorkList = data
  },
  CHANGE_NAME: (state, lessonid) => {
    // 把ID号转为对应课名
    state.lessonName = '组' + lessonid
  }
}

const actions = {
  // 通过GroupID获取作业列表
  GetListbyGroup({ commit, state }, groupid) {
    return new Promise((resolve, reject) => {
      getbyGroupId(groupid
      ).then(response => {
        console.log(response)
        if (response.code === 200) {
          const { data } = response
          data.map(value => {
            commit('CHANGE_NAME', value.lessonId)
            value.lessonName = state.lessonName
          })
          commit('SET_GroupList', data)
          resolve(data)
        }
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  GetListbyLesson({ commit, state }, lessonid) {
    // 通过LessonID获取作业列表
    return new Promise((resolve, reject) => {
      getbyLessonId({ lessonId: lessonid }
      ).then(response => {
        console.log(response)
        const { data } = response
        data.map(value => {
          commit('CHANGE_NAME', value.lessonId)
          value.lessonName = state.lessonName
        })
        commit('SET_LessonList', data)
        resolve(data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  PublishWork({ commit, state }, publishinfo) {
    // 布置作业
    return new Promise((resolve, reject) => {
      PublishWork({ publishinfo }
      ).then(response => {
        console.log(response)
        state.CurrentWork = publishinfo
        resolve(response)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  UpdateWork({ commit, state }, updateinfo) {
    // 修改更新作业
    return new Promise((resolve, reject) => {
      UpdateWork({ updateinfo }
      ).then(response => {
        console.log(response)
        state.CurrentWork = updateinfo
        resolve(response)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

