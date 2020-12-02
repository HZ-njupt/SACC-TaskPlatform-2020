<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <div class="titleicon">{{ group }}</div>

    <el-collapse-item v-for="item in HomeworkList" :key="item.id" :name="item.id" class="marginL">
      <template slot="title">
        <h3>{{ item.name }}</h3>
        <p class="deadline marginL">DeadLine：{{ item.deadline }}</p>
        <!-- <p v-if="item.finish==1" class="marginL">finished</p>
        <p v-if="item.finish==0" class="marginL">unfinish</p> -->
      </template>
      <div class="marginL">
        <p>From lesson：{{ item.lessonName }}</p>
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
      group: '',
      activeNames: ['1'],
      HomeworkList: [],
      submitext: ''
    }
  },
  created: function() {
    this.group = this.$store.getters.groupname
    // this.getListbyGroupID(this.$store.getters.groupid)

    this.getListbyGroupID(1)
  },
  methods: {
    getListbyGroupID(val) {
      if (val) {
        this.$store.dispatch('homework/GetListbyGroup', val).then(response => {
          if (response) {
            console.log(response)
            this.HomeworkList = response
          }
        })
      }
    },
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

