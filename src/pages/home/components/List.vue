<template>
 <div>
   <el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for='item of swiperList' :key="item.id">
          <img  class="banner-img" :src="item.url" alt="#">
       </el-carousel-item>
   </el-carousel>
 </div>
</template>
<script>
export default {
  name: 'HomeList',
  data () {
    return {
      swiperList: [{
        id: '001',
        url: 'http://bpic.51yuansu.com/banner/banner19-shengdan.png'
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
</style>

