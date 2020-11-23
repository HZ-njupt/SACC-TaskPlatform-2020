<template>
  <div class="app-container">
    <div class="worktitle">Add new Homework</div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="作业主题">
        <el-input v-model="form.name" />
      </el-form-item>
      <!-- <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="提交截止日期">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item> -->
      <el-form-item label="发布部门">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="前端组" name="type" />
          <el-checkbox label="后端组" name="type" />
          <el-checkbox label="人工智能组" name="type" />
          <el-checkbox label="算法组" name="type" />
          <el-checkbox label="安全组" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="作业详细描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    <div class="worktitle">Published Homework</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.worktitle{
  margin: 20px 0 20px 0;
}
</style>

