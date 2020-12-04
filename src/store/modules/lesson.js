import { addLesson, updateLesson, getLesson, deleteLesson, updateLessonURL, isLiveUrl } from "@/api/lesson.js";

const mutations = {
  increment: function() {
    console.log(this);
  }
};

const actions = {
  // 添加课程
  addLesson({ commit }, LessonInfo) {
    const { name, groupId, desc, time, location, type, liveUrl } = LessonInfo;
    return new Promise((resolve, reject) => {
      addLesson({
        name: name.trim(),
        groupId: groupId,
        desc: desc.trim(),
        time: time.trim(),
        location: location.trim(),
        type: type,
        liveUrl: liveUrl.trim()
      })
        .then(response => {
          console.log(response.message);
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  // 更新课程
  updateLesson({ commit }, LessonInfo) {
    const { name, groupId, desc, time, location, type, liveUrl } = LessonInfo;
    return new Promise((resolve, reject) => {
      updateLesson({
        name: name.trim(),
        groupId: groupId,
        desc: desc.trim(),
        time: time.trim(),
        location: location.trim(),
        type: type,
        liveUrl: liveUrl.trim()
      })
        .then(response => {
          console.log(response.data);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  //获取课程
  getLesson({ commit },Id) {
    const id = Id;
    return new Promise((resolve, reject) => {
      getLesson({
        id
      })
        .then(response => {
          console.log(response.data);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  //删除课程
  deleteLesson({commit},Id) {
    const id = Id;
    return new Promise((resolve, reject) => {
      deleteLesson({
        id
      })
        .then(response => {
          console.log(response.message);
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  //修改直播地址
  updateLessonURL({commit}, UrlInfo) {
    const {id, url} = UrlInfo;
    return new Promise((resolve, reject) => {
      updateLessonURL({
        id: id,
        url: url.trim(),
      })
      .then(response => {
        console.log(response.message);
        resolve();
      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
    })
  },

  //设置某课程是否为直播课
  isLiveUrl({commit}, isLiveUrlInfo) {
    const {id, type} = isLiveUrlInfo;
    isLiveUrl({
      id,
      type
    }).then(response=> {
      console.log(response.message);
      resolve();
    }).catch(error=> {
      console.log(error);
      reject(error);
    })
  }

};

export default {
  namespaced: true,
  mutations,
  actions
};
