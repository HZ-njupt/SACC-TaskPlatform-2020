<template>
  <div class="lesson-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="item in ClassList"
        :key="item.id"
        :name="item.id"
        class="marginL"
      >
        <template slot="title">
          <h3>{{ item.name }}</h3>
          <p class="marginL">Time：{{ item.time }}</p>
        </template>
        <div class="marginL">
          <p><b>Position：</b>{{ item.location }}</p>
          <p><b>Description: </b>{{ item.desc }}</p>
          <a href="" class="liveHref"
            ><u>{{ item.status }}</u></a
          >
        </div>
        <el-button v-if="item.finish" type="primary" class="toHomeWork"
          >FinishIt</el-button
        >
      </el-collapse-item>
    </el-collapse>

    <el-form
      ref="addLessonForm"
      class="add-lesson-form"
      :model="addLessonForm"
      label-position="left"
      label-width="80px"
      size="mini"
      :rules="rules"
      status-icon
    >
      <el-form-item label="课程名称" prop="name">
        <el-input
          v-model="addLessonForm.name"
          placeholder="课程名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="groupId" prop="groupId">
        <el-input v-model.number="addLessonForm.groupId"></el-input>
      </el-form-item>
      <el-form-item label="课程描述" prop="desc">
        <el-input
          v-model="addLessonForm.desc"
          placeholder="课程描述"
        ></el-input>
      </el-form-item>
      <el-form-item label="上课时间" prop="time">
        <el-input
          v-model="addLessonForm.time"
          placeholder="例:2020-11-28 16:00 - 2020-11-28 17:30"
        ></el-input>
      </el-form-item>
      <el-form-item label="上课地点" prop="location">
        <el-input
          v-model="addLessonForm.location"
          placeholder="上课地点"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程类型" prop="type">
        <el-input v-model.number="addLessonForm.type"></el-input>
      </el-form-item>
      <el-form-item label="直播地址" prop="liveUrl">
        <el-input
          v-model="addLessonForm.liveUrl"
          placeholder="例:https://www.bilibili.com"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加课程</el-button>
        <el-button type="primary" @click="onUpdate">更新课程</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
        <el-button type="danger" @click="ondelete">删除课程</el-button>
        <el-button type="primary" @click="onUpdateURL">修改直播课地址</el-button>
      </el-form-item>
    </el-form>

  
    
  </div>
</template>

<script>
import { addLesson } from "@/api/lesson";

export default {
  data() {
    return {
      activeNames: ["1"],
      ClassList: [
        // {
        //   id: "1",
        //   name: "前端宣讲课",
        //   desc:
        //     "在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        //   time: "2020.09.31 12：00",
        //   location: "4-532",
        //   status: "To view a live",
        // },
        // {
        //   id: "2",
        //   name: "CSS应用",
        //   desc:
        //     "在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        //   time: "2020.09.31 12：00",
        //   location: "4-532",
        //   status: "See the replay",
        // },
        // {
        //   id: "3",
        //   name: "Javascript基础语法 ",
        //   desc:
        //     "在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        //   time: "2020.09.31 12：00",
        //   location: "4-532",
        //   status: "See the replay",
        // },
      ],
      addLessonForm: {
        name: "1",
        groupId: 0,
        desc: "1",
        time: "1",
        location: "1",
        type: 0,
        liveUrl: "1",
      },
      rules: {
        name: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
        groupId: [
          { required: true, message: "请输入课程Id", trigger: "blur" },
          { type: "number", message: "课程Id必须为数字" },
        ],
        desc: [{ required: true, message: "请输入课程描述", trigger: "blur" }],
        time: [{ required: true, message: "请输入课程时间", trigger: "blur" }],
        location: [
          { required: true, message: "请输入授课地点", trigger: "blur" },
        ],
        type: [
          { required: true, message: "请输入课程类型", trigger: "blur" },
          { type: "number", message: "年龄必须为数字值" },
        ],
        liveUrl: [
          { required: true, message: "请输入直播地址", trigger: "blur" },
        ],
      },
    };
  },

  created: function () {
    this.getByGroupId();
  },

  methods: {
    //添加课程
    onSubmit: function () {
      console.log(this);
      this.loading = true;
      this.$store
        .dispatch("lesson/addLesson", this.addLessonForm)
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
      //  const data = this.$axios.post('http://127.0.0.1:4523/mock/361581/lesson/addLesson',this.addLessonForm).then(Response =>console.log(Response));
    },

    //更新课程
    onUpdate: function () {
      this.$store
        .dispatch("lesson/updateLesson", this.addLessonForm)
        .then((response) => {
          while (this.ClassList != 0) {
            this.ClassList.pop();
          }
          for (var i = 0; i < response.data.length; i++) {
            this.ClassList.push(response.data[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //根据组ID获取课程
    getByGroupId: function () {
      this.$store.dispatch("lesson/getLesson", 1).then((response) => {
        this.ClassList = response.data;
      });
    },

    //删除课程
    ondelete: function () {
      this.$store
        .dispatch("lesson/deleteLesson", 1)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },

    //更新直播课地址
    onUpdateURL: function () {
      this.$store.dispatch('lesson/updateLessonURL',{
        id: 1,
        url: 'http://www.baidu.com'
      }).then(()=>{})
      .catch(err=>{
        console.log(err);
      })
    },

    //设置某课程是否为直播课
    isLiveUrl: function () {
      this.$store.dispatch('lesson/isLiveUrl',{
        id: 1,
        type: 1
      }).then(()=>{}).catch(()=>{})
    },

    //重置表单
    resetForm: function () {
      this.$refs.addLessonForm.resetFields();
      console.log("已重置");
    },

    handleChange: function () {
      console.log("");
    },
  },
};
</script>

<style lang="scss" scoped>
.marginL {
  margin-left: 20px;
}
.liveHref {
  color: darkblue;
}
</style>

<style lang="css" scoped>
.add-lesson-form {
  width: 400px;
}
</style>