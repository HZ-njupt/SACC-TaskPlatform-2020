<template>
  <div class="dashboard-container">

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="org_title">前端组</div>
          <p>我们是网站的艺术总监，你可以学习到html、css、javascript等语言，用代码创造自己的专属网页；我们也负责项目的前端开发，将抽象的数据变得能与用户交互。欢迎加入前端组一起做院科协“颜值担当”，做有情调的码农~</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="org_title">后端组</div>
          <p>后端组负责项目的后端开发，这里没有大佬，只有志同道合的coder。在这里你会学习到java，c/c++等多种后端语言，学习主流的后端开发框架，以及数据库知识，同时我们也会有相应的实战项目来锻炼你的能力。后端开发需要去构建应用程序的体系结构和内部设计，实现算法和逻辑，以及工作于数据。无论你是有技术基础的高手还是初入计算机世界的萌新，如果你愿意探索未知，欢迎加入我们。</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="org_title">人工智能组</div>
          <p>人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，来到人工智能组，这里会有有着丰富学习经验的学长学带你深入这一先进技术的前沿领域，探索深度学习，神经网络，计算机视觉的奥秘，为你在大学生活中展开一扇新的技术大门 。</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="org_title">算法组</div>
          <p>算法是解决一个问题的核心，在算法组，你可以学习到许多重要的解题思想，认识到和你一样对算法感兴趣的小伙伴，提高自己的思维能力和代码能力，欢迎大家加入算法组。</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="org_title">安全组</div>
          <p>安全组是由一群热爱信息安全的小伙伴们组成的团体，热衷于钻研安全技术，活跃于网络安全领域，经常参加国内外各大网络安全大赛（CTF），并取得过很多优异的成绩。</p>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    height: 37vh;
  }

  .bg-purple {
    background: rgb(0,0,0,0.2);
  }

  .grid-content {
    border-radius: 8px;
    height: 39vh;
    min-height: 200px;
    overflow: hidden;
  }
.org_title{
    background: linear-gradient(to top right,#304156 0%, #526f92 36%, #729fd6 100%);
    position: relative;
    color: white;
    box-shadow: 1px 3px 8px grey;
    top: 18px;
    width: 33%;
    min-width: 150px;
    border-radius: 0px 5px 5px 0px;
    font-size: 1.3em;
    text-align: center;
    padding-top: 5px;
    height: 34px;
    margin-bottom: 40px;
}
.grid-content p{
    width: 93%;
    margin: 0 auto;
}
</style>
