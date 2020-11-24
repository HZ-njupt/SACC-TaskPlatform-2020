import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    nick: '',
    studentId: '',
    phoneNumber: '',
    email: '',
    qq: '',
    groupId: 1,
    password: '',
    avatar: '',
    roles: [],
    createdAt: '',
    updatedAt: '',
    username: '',
    groupName: ''
  }
}

const state = getDefaultState()
const mutations = {

  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 设置用户信息
  SET_INFO: (state, data) => {
    state.name = data.name
    state.avatar = data.avatar
    state.nick = data.nick
    state.studentId = data.studentId
    state.phoneNumber = data.phoneNumber
    state.email = data.email
    state.username = data.username
    state.groupId = data.groupId
    state.password = data.password
    state.createdAt = data.createdAt
    state.updatedAt = data.updatedAt
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  CHANGE_NAME: (state) => {
    // 把ID号转为对应组名
    state.groupName = '组' + state.groupId
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { email, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password }
      ).then(response => {
        console.log(response)
        const { data } = response
        // commit('SET_TOKEN', data.token)
        // console.log(data.token)
        // setToken(data.token)
        commit('SET_TOKEN', '1111111') // 等待后端添加token
        setToken('1111111')
        resolve()
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        var data = response.data
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        // 权限默认editor普通用户，admin管理员
        var role = ['admin']
        if (data.role === 1) {
          role = ['admin']
        }
        const roles = role
        // roles must be a non-empty array
        if (roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_INFO', data)
        commit('SET_ROLES', roles)
        commit('CHANGE_NAME')
        resolve(roles)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出登录
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

