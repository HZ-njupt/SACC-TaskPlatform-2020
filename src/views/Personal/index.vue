<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item>
        <div class="HeadPortrait">
          <el-avatar class="elAvatar" src="" />
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <!-- <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
       <i class="el-icon-upload"></i>
       <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
       <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
     </el-upload> -->
        </div>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="11">
          <el-form-item label="Nickname">
            <el-input v-model="form.nickname" />
          </el-form-item>
          <el-form-item label="Real Name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Student Id">
            <el-input v-model="form.number" />
          </el-form-item>

          <el-form-item label="Identity">
            <el-input v-model="form.identity" :disabled="true" />
          </el-form-item>

        </el-col>
        <el-col :span="11">
          <el-form-item label="Major">
            <el-select v-model="form.major">
              <el-option v-for="item in optionMajor" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="Department">
            <el-select v-model="form.department">
              <el-option v-for="item in optionDepart" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="Mail">
            <el-input v-model="form.mail" :disabled="true" />
          </el-form-item>

        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">save all</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      form: {
        nickname: 'HZhuozhuooo',
        name: '黄卓',
        number: 'B18031007',
        major: '信息安全',
        department: '前端开发组',
        mail: '1553780451@qq.com',
        identity: '部员'
      },
      optionDepart: [
        {
          value: '0',
          label: '前端开发组'
        },
        {
          value: '1',
          label: '后端开发组'
        },
        {
          value: '2',
          label: '人工智能组'
        },
        {
          value: '3',
          label: '算法组'
        },
        {
          value: '4',
          label: '安全组'
        }
      ],
      optionMajor: [
        {
          value: '0',
          label: '计算机科学与技术'
        },
        {
          value: '1',
          label: '信息安全'
        },
        {
          value: '2',
          label: '软件工程'
        },
        {
          value: '3',
          label: '大数据'
        },
        {
          value: '4',
          label: '。。。'
        }
      ]
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
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #2e2e2e;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;

  }
  .elAvatar{
      height: 130px;
      width: 130px;
      margin-right: 5vh;
  }
  .HeadPortrait{
      display: flex;
      flex-direction: row;
  }
</style>
