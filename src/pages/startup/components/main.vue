<template>
  <div class='startup'>
    <div class='iconfont login-icon' @click="submit()"><a href="#">&#xe607;</a></div>
    <el-dialog  title="小可爱" :visible.sync="dialogVisible" width="25%" center :append-to-body="true">
      <login-name></login-name>
    </el-dialog>
    <div class='bg-img'>
      风华无双
    </div>
  </div>
</template>
<script>
import LoginName from './login.vue'
export default {
  name: 'mainPage',
  components: {LoginName},
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    submit () {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
    .startup {
      background: url('login.png');
      position: fixed;
      width:100%;
      height: 100%;
      top: 0;
      background-size: cover;
      background-repeat: no-repeat;
      .login-icon{
        position: absolute;
        font-size:38px;
        right: 120px;
        top: 15px;
        font-weight: bold;
        color:  rgb(176, 175, 214);
        a:hover{
          color: rgb(189, 115, 115)
        }
      }
      .bg-img{
        width: 60px;
        padding-top: 250px;
        padding-left: 180px;
        font: bold 60px helvetica, arial, sans-serif;
        color: rgb(210, 226, 233);
        text-shadow: 0 0 0.2em  rgb(236, 80, 56),0 0 0.2em rgb(183, 233, 252);
      }
  }
  .el-dialog{
    border-radius: 5px;
    box-shadow:  0 0 25px #43777e;
    background-color: rgb(243, 249, 250);
    font-weight: bold
  }
</style>
