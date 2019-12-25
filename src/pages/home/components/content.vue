<template>
  <div  class="box">
    <div class='img-box' v-for='item of imgList' :key='item.id'>
      <el-card :body-style="{padding:'5px'}" >
        <img :src="item.url" class='image'/>
        <div class="item-desc">
         <span>{{item.desc}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListContent',
  props: {
    imgList: Array
  }
}
</script>
<style lang="scss" scoped>
.box{
  float: left;
  width: 100%;
  .img-box{
    width: 20%;
    height: 200px;
    float: left;
    margin: 20px;
    .el-card{
      border-radius: 10px;
      .image{
        width: 100%;
        display: block
      }
      .item-desc{
       text-align:center;
       color: rgb(54, 126, 126)
      }
    }
 }
}
</style>
