<template>
 <div class="login-box">
   <div class="login-content">
      <div class="login-img">
        <img src="@/assets/login.png" alt />
      </div>
      <div class='login-input'>
        <div class='login-type'>
          <div class='login-pwd'>密码登录</div>
          <div class='login-mes'>短信登录</div>
        </div>
        <div class='input-item'>
          <input type="text"  placeholder="用户名">
          </div>
        <div class='input-item'>
          <input type="password"  placeholder="密码">
        </div>
        <div class='pwd-info'>
          <div  class='rem-pwd'>
            <input  class='rem-checkout' type="checkbox" value='记住密码'>记住密码
          </div>
          <div class='fog-pwd'>
            <a href="#">忘记密码</a>
            <a href="#">注册</a>
          </div>
        </div>
        <button class='login-btn'>登录</button>
      </div>
   </div>
   <div class="login-info">
   </div>
 </div>
</template>
<script>
export default {
  name: 'LoginHeader'
}
</script>
<style lang="scss">
 .login-box {
   width:100%;
   height:100%;
   background-color: #f0f7fb;
 }
  .login-content {
   position: relative;
   height:500px;
   background:linear-gradient(-160deg,rgb(237, 241, 243),rgb(252, 252, 253));
   .login-img {
      position: absolute;
      top: 80px;
      left: 180px;
      img{
        height:400px;
        width: 400px;
      }
   }
   .login-input{
     position: absolute;
     width:350px;
     background-color: #fff;
     height:350px;
     right:200px;
     top:75px;
     text-align: center;
     border-radius: 12px;
     .login-type{
       margin: 0 auto;
       margin-top:30px;
       height: 40px;
       width: 280px;
       line-height: 40px;
       border-bottom:1px solid #cccccc;
       color: #cccccc;
       text-align: left;
       .login-pwd{
         display: inline-block;
         margin: 4px;
       }
       .login-mes{
         display: inline-block;
         margin:4px;
       }

     }
     .input-item{
      input{
        width:280px;
        height:38px;
        margin-top:25px;
        background:rgb(232, 240, 254);
        border-radius:4px;
        border:1px solid #cccccc;
     }
      input::-webkit-input-placeholder {
        color: #cccccc;
        font-size:14px;
        font-family:MicrosoftYaHei;
        padding-left:16px;
      }
   }
   .pwd-info{
    .rem-pwd{
     margin-top: 25px;
     margin-bottom: 15px;
     display: inline-block;
      .rem-checkout{
       width:16px;
       height:16px;
       vertical-align:middle;
       border: 1px solid #cccccc;
       margin-right:10px;
     }
   }
    .fog-pwd{
       display: inline-block;
       margin-left: 98px
      }
   }
  }
  .login-btn{
    width: 280px;
    height: 38px;
    border-radius:4px;
    background-color:rgb(101, 158, 196);
    color:#fff
  }
  }
</style>
