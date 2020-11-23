<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <div class="titleicon">前端开发组</div>

    <el-collapse-item v-for="item in HomeworkList" :key="item.id" :name="item.id" class="marginL">
      <template slot="title">
        <h3>{{ item.name }}</h3>
        <p class="deadline marginL">DeadLine：{{ item.deadline }}</p>
        <p v-if="item.finish==1" class="marginL">finished</p>
        <p v-if="item.finish==0" class="marginL">unfinish</p>
      </template>
      <div class="marginL">
        <p>From lesson：{{ item.lesson }}</p>
        <p>{{ item.desc }}</p>
      </div>
      <div class="submitbox">
        <h3>Submit Homework</h3>
        <div class="choosebox">
          <i class="el-icon-brush" title="Clear" />
          <i class="el-icon-upload2" title="Upload" />
        </div>
        <el-input v-model="submitext" type="textarea" :autosize="{ minRows: 8, maxRows: 16}" />
        <el-button type="primary" class="subbtn">Submit</el-button>
        <el-button v-if="item.finish==1" type="primary">View Excellent</el-button>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      HomeworkList: [
        {
          id: '1',
          name: 'HTML基础',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          deadline: '2020.09.31 12：00',
          lesson: '前端第一次授课',
          finish: '0'
        }, {
          id: '2',
          name: 'CSS应用',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          deadline: '2020.09.31 12：00',
          lesson: '前端第一次授课',
          finish: '0'
        }, {
          id: '3',
          name: 'Javascript基础语法 ',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          deadline: '2020.09.31 12：00',
          lesson: '前端第一次授课',
          finish: '1'
        }
      ],
      submitext: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.titleicon{
  width: 100px;
  padding: 10px;
  /* background-color: #304156;
  color: white; */
}
.deadline{
  color: darkorange;
}
.marginL{
  margin-left: 20px;
}
.toHomeWork{
  float: right;
  margin: 0 20px 10px 0;
}
.choosebox{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color:rgb(204, 204, 204);
}
.choosebox i{
    padding: 7px;
}
.choosebox i:hover{
    cursor: pointer;
    background-color: rgb(173, 173, 173);
    content: none;
}
.choosebox i:hover:after{
    position: absolute;
	left: 15px;
	top: 25px;
	padding: 3px;
	background-color: #eeeeee;
	color: rgba(0, 0, 0, 0.521);
    border-radius: 3px;
    content: attr(title);
    z-index: 2;
}
.submitbox{
    width: 50%;
    margin: 5vh 0 3vh 0;
}
.subbtn{
    margin-top: 3vh;
}
.subinput{
    height: 15vh;
}
</style>

