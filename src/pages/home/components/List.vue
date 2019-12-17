<template>
 <div>
   <el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for='item of swiperList' :key="item.id">
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
  components: {
    ListContent
  },
  data () {
    return {
      swiperList: [{
        id: '001',
        url: 'http://pic.51yuansu.com/banner/banner19-invite.jpg'
      },
      {
        id: '002',
        url: 'http://bpic.51yuansu.com/banner/banner19-q4.jpg'
      },
      {
        id: '003',
        url: 'http://bpic.51yuansu.com/banner/banner20-yuandan.png'
      },
      {
        id: '004',
        url: 'http://bpic.51yuansu.com/banner/banner19-shengdan.png'
      },
      {
        id: '005',
        url: 'http://pic.51yuansu.com/banner/banner18-onlinebj.png'
      },
      {
        id: '006',
        url: 'http://bpic.51yuansu.com/activity/20191202/5de4c09f70f0a.png'
      }]
    }
  }
}
</script>
<style lang="scss">
  .banner-img{
    width: 100%;
    height: 100%;
  }
</style>
