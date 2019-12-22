<template>
 <div>
   <el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for="item in swiperList" :key="item.id">
          <img  class="banner-img" :src="item.url" alt="#">
       </el-carousel-item>
   </el-carousel>
   <list-content :imgList="imgList"></list-content>
 </div>
</template>
<script>
import ListContent from './content'
export default {
  name: 'HomeList',
  props: {
    swiperList: Array
  },
  data () {
    return {
      imgList: []
    }
  },
  methods: {
    getContentInfo () {
      this.axios.get('../../../static/mock/list.json')
        .then(this.getContentInfoSucc)
    },
    getContentInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgList = data.imgList
      }
    }
  },
  mounted () {
    this.getContentInfo()
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
