<template>
 <div class="login-box">
   <div class="login-content">
      <div class="login-img">
        <img src="@/assets/login.png" alt />
      </div>
      <div class='login-input'>
        <div class='login-type input-width'>
          <div class='login-pwd'>密码登录</div>
          <span>|</span>
          <div class='login-mes'>短信登录</div>
        </div>
        <div class='input-item'>
          <input class='input-width' type="text"  placeholder="用户名">
          </div>
        <div class='input-item'>
          <input class='input-width' type="password"  placeholder="密码">
        </div>
        <div class='pwd-info'>
          <div  class='rem-pwd'>
            <input  class='rem-checkout' type="checkbox" value='记住密码'>记住密码
          </div>
          <div class='fog-pwd'>
            <a href="#">忘记密码</a>
             <span>|</span>
            <a href="#">注册</a>
          </div>
        </div>
        <router-link to='/home'>
        <button class='login-btn input-width'>登录</button>
        </router-link>
      </div>
   </div>
   <div class="login-info">
     <p class="title">为爱发电之风华无双个人基站</p>
     <p>这辈子遇见你，也不知知识良缘还是孽缘---谢云</p>
     <p>风华无双是一名中文配音CV，自2008年加入配音圈，出品了很多广播剧、视频剧等作品</p>
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
 }
  .login-content {
   position: relative;
   height:500px;
   background:linear-gradient(-160deg,rgb(198, 236, 250),rgb(252, 252, 253));
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
    border-radius:4px;
    background-color:rgb(101, 158, 196);
    color:#fff
  }
  }
  .login-info{
    p{
      color:rgb(101, 158, 196);
      text-align: center;
      margin-top: 15px;
      font-size: 12px
    }
    .title{
      font-weight: bold;
      margin-top: 25px;
      font-size: 14px
    }
  }
</style>
