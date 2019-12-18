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
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577257794&di=41faf8d24bf150d3a8888fd229e683ea&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F09%2F20180909112613_MjAXz.thumb.700_0.jpeg'
      },
      {
        id: '002',
        url: 'http://img4.imgtn.bdimg.com/it/u=4203944238,4070525006&fm=26&gp=0.jpg'
      },
      {
        id: '003',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576663108699&di=97a8fdb919fd04689789882f288444c1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F22%2F20140322225738_GJH4R.jpeg'
      },
      {
        id: '004',
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2119718364,2571554568&fm=26&gp=0.jpg'
      },
      {
        id: '005',
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1026970701,1485111267&fm=26&gp=0.jpg'
      },
      {
        id: '006',
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=903735196,2272250986&fm=26&gp=0.jpg'
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
