<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item v-for="item in ClassList" :key="item.id" :name="item.id" class="marginL">
      <template slot="title">
        <h3>{{ item.name }}</h3>
        <p class="marginL">Time：{{ item.time }}</p>
      </template>
      <div class="marginL">
        <p><b>Position：</b>{{ item.location }} </p>
        <p><b>Description: </b>{{ item.desc }}</p>
        <a href="" class="liveHref"><u>{{ item.status }}</u></a>
      </div>
      <el-button v-if="item.finish" type="primary" class="toHomeWork">FinishIt</el-button>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {

  data() {
    return {
      ClassList: [
        {
          id: '1',
          name: '前端宣讲课',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          time: '2020.09.31 12：00',
          location: '4-532',
          status: 'To view a live'
        }, {
          id: '2',
          name: 'CSS应用',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          time: '2020.09.31 12：00',
          location: '4-532',
          status: 'See the replay'
        }, {
          id: '3',
          name: 'Javascript基础语法 ',
          desc: '在界面中一致,所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
          time: '2020.09.31 12：00',
          location: '4-532',
          status: 'See the replay'
        }
      ]

    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.marginL{
  margin-left: 20px;
}
.liveHref{
  color: darkblue;
}
</style>
