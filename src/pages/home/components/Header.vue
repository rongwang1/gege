<template>
 <div class='homePage'>
     <div class="list">
       <ul class="content-list">
         <li><a href="#">首页</a></li>
         <li><a href="#">作品展示</a></li>
         <li><a href="#">直播</a></li>
         <li><a href="#">安利</a></li>
         <li><a href="#">联系</a></li>
       </ul>
     </div>
 </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
  .homePage{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgb(238, 244, 248);
    .list{
      width: 700px;
      margin: 20px  auto;
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        li{
          float: left;
          a{
            display: block;
            color: rgb(138, 135, 130);
            font-weight: bold;
            text-decoration:none;
            padding: 12px 45px;
          }
        }
        li :hover{
          background-color:rgb(193, 215, 236);
          border-radius: 22px;
          color: white;
        }
      }
   }
  }
</style>
