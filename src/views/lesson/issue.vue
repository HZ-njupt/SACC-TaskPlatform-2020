<template>
  <div class="app-container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-form v-for="item in form" ref="form" :key="item.issueId" :model="item">
        <el-collapse-item :name="item.id">
          <template slot="title">
            <div class="userissue">
              <el-avatar icon="el-icon-user-solid" class="usericon" />
              <span>{{ item.content }}</span>
            </div>
          </template>
          <p v-for="re in item.reply" :key="re" class="replys">{{ re }}</p>
          <el-input v-model="item.replying" type="textarea" />
          <el-button type="primary" size="small" class="btnReply">Reply</el-button>
        </el-collapse-item>
      </el-form>
    </el-collapse>
    <div class="bottom">
      <div class="addissue">
        <el-input v-model="addissue" class="addinput" />
        <el-button type="primary" class="btnadd" round>Ask questions</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  filters: {
    // statusFilter(status) {
    //   const statusMap = {
    //     published: 'success',
    //     draft: 'gray',
    //     deleted: 'danger'
    //   }
    //   return statusMap[status]
    // }
  },
  data() {
    return {
      activeNames: ['1'],
      form: [
        {
          'content': '11111111111111111111?',
          'id': 0,
          'issueId': 0,
          'userId': 0,
          'reply': ['22222', '33333', '44444'],
          'replying': ''
        }, {
          'content': '11221111111111111111?',
          'id': 1,
          'issueId': 1,
          'userId': 1,
          'reply': ['22222', '33333', '44444'],
          'replying': ''
        }, {
          'content': '112211111111177771111?',
          'id': 3,
          'issueId': 3,
          'userId': 3,
          'reply': ['22222', '33333', '44444'],
          'replying': ''
        }
      ],
      addissue: ''
    }
  },
  // created() {
  //   this.fetchData()
  // },
  methods: {
    handleChange(val) {
      console.log(val)
    }
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // }
  }
}
</script>

<style coped>
.bottom{
   position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  padding-top: 3vh;
}
.addissue{
  width: 80%;
  display: flex;
  justify-content:start;
  flex-direction: row;
 margin-bottom: 5vh;

}
.userissue{
  display: flex;
  flex-direction: row;
  align-content:center;

}
.usericon{
  margin-right: 20px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    margin-top: 10px;
    background: #7e9edc;
}
.replys{
  margin-left: 3vw;
  padding-left: 1vw;
  line-height: 30px;
  background-color: rgb(235, 235, 235);
}
.btnReply{
  float: right;
  margin:8px 1px 5px 0;
}

.addinput{
  width: 90%;
}
.btnadd{
  margin-left: 2vw;
}
</style>
