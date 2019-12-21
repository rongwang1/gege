<template>
 <div>
   <el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for="item in swiperList" :key="item.id">
          <img  class="banner-img" :src="item.url" alt="#">
       </el-carousel-item>
   </el-carousel>
   <list-content></list-content>
 </div>
</template>
<script>
import ListContent from './content'
export default {
  name: 'HomeList',
  props: {
    swiperList: Array
  },
  components: {
    ListContent
  }
}
</script>
<style lang="scss" scoped>
  .banner-img{
    width: 100%;
    height: 100%;
  }
</style>
