import { getInfo } from '@/api/user'
import { setSession, removeSession } from '@/utils/auth'
import { resetRouter } from '@/router'
import axios from 'axios'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const getDefaultState = () => {
  return {
    // token: getToken(),
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
    groupName: '',
    islogin: false
  }
}

const state = getDefaultState()
const mutations = {

  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
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
  },
  successLogin: (email) => {
    setSession(email)
  },
  failLogin: (state) => {
    removeSession()
  }
}

const actions = {
  // 用户登录
  login({ state, commit }, userInfo) {
    const { email, password } = userInfo
    var formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    return new Promise((resolve, reject) => {
      axios({ // 因为登录的数据格式和其它接口不一样所以暂时先放在这里了
        method: 'POST',
        url: 'api/login',
        withCredentials: true, // 允许携带cookie
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 数据格式为FromData
        },
        data: formData
      }).then((res) => {
        if (res.data.code === 200) {
          commit('successLogin')
          resolve()
        }
      }).catch(err => {
        reject(err)
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
        console.log(response)
        // 权限默认editor普通用户，admin管理员
        var role = ['editor']
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
    removeSession() // 移除session
    resetRouter()
    commit('RESET_STATE') // 重置用户数据
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeSession() // must remove  token  first
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

