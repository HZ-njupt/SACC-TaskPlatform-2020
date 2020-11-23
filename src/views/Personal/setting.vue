<template>
  <div class="app-container">
    <el-row :gutter="22">
      <el-col :span="11">
        <span class="changeTit">Change Password</span>
        <el-form ref="form" :model="form" :rules="rules" label-width="30px">
          <el-form-item prop="oldPass">
            <span>Old Password</span>
            <el-input v-model="form.oldPass" show-password />
          </el-form-item>
          <el-form-item prop="newPass">
            <span>New Password</span>
            <el-input v-model="form.newPass" show-password />
          </el-form-item>
          <el-form-item prop="confirmPass">
            <span>Confirm New Password</span>
            <el-input v-model="form.confirmPass" show-password />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="11">
        <span class="changeTit">Change Email</span>
        <el-form ref="form2" :model="form2" :rules="rules" label-width="50px">
          <el-form-item prop="currentPass">
            <span>Current Password</span>
            <el-input v-model="form2.currentPass" show-password />
          </el-form-item>
          <el-form-item prop="oldMail">
            <span>Old Email</span>
            <el-input v-model="form2.oldMail" :disabled="true" />
          </el-form-item>

          <el-form-item prop="newMail">
            <span>New Mail</span>
            <el-input v-model="form2.newMail" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        oldPass: '',
        newPass: '',
        confirmPass: ''
      },
      form2: {
        currentPass: '',
        oldMail: '1553780451@qq.com',
        newMail: ''
      },
      rules: {
        oldPass: {
          required: true, message: 'Please input Old Password', trigger: 'blur'
        },
        newPass: {
          required: true, message: 'Please input New Password', trigger: 'blur'
        },
        confirmPass: {
          required: true, message: 'Please input New Password Again', trigger: 'blur'
        },
        currentPass: {
          required: true, message: 'Please input Password', trigger: 'blur'
        },
        newMail: [
          { required: true, message: 'Please input New Email', trigger: 'blur' },
          { type: 'email', message: 'Please input the Correct Email', trigger: ['blur', 'change'] }

        ]
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
.changeTit{
    font-weight: 600;
   padding: 3vh;
    display: block;
}
</style>
