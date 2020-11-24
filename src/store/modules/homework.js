import { getbyGroupId } from '@/api/homework'
const state = {
  WorkList: [],
  lessonName: ''
}

const mutations = {
  SET_List: (state, data) => {
    state.WorkList = data
  },
  CHANGE_NAME: (state, lessonid) => {
    // 把ID号转为对应课名
    state.lessonName = '组' + lessonid
  }
}

const actions = {
  // 通过GroupID获取作业列表
  getlist({ commit, state }, groupid) {
    return new Promise((resolve, reject) => {
      getbyGroupId({ group: groupid }
      ).then(response => {
        console.log(response)
        const { data } = response
        data.map(value => {
          commit('CHANGE_NAME', value.lessonId)
          value.lessonName = state.lessonName
        })
        // commit('SET_List', data)
        resolve(data)
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

