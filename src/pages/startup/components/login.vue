<template>
   <div>
    <el-form ref="loginForm" :model="form" :rules="rules" class='login-box'>
      <el-form-item  prop="username">
        <el-input  type='text' placeholder="输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
    title="温馨提示"
    :visible.sync="dialogVisible"
    center
    :append-to-body="true"
    width="30%">
    <span>请输入账号和密码</span>
    <span  slot="footer" class="dialog-fotter">
      <el-button type="primary" @click="dialogVisible=false">确定</el-button>
    </span>
    </el-dialog>
   </div>
</template>
<script>
export default {
  name: 'LoginName',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      // required 为true则不能为空
      // type是输入框value的类型
      // message是错误提醒文字
      // trigger 是什么时候出发
      // validator是自定义
      rules: {
        username: [
          {required: true, type: 'string', message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
      dialogVisible: false
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          this.dialogVisible = true
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss"  scoped>
 .login-box{
   width: 300px;
 }
 .el-button--primary{
   width: 100%;
   background-color: rgb(118, 172, 194);
   border-color: none;
 }
</style>
