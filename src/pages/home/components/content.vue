<template>
  <div>
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
  data () {
    return {
      imgList: [{
        id: '01',
        url: '//static.missevan.com/dramacoversmini/201607/11/1f32394aeca5fd1d674a931ce54ea605082215.jpg?x-oss-process=style/webp',
        desc: '艳鬼'
      },
      {
        id: '02',
        url: '//static.missevan.com/dramacoversmini/201608/03/b36889674ea9b13f82c530dee65fc327042840.jpg?x-oss-process=style/webp',
        desc: '乱世为王'
      },
      {
        id: '03',
        url: '//static.missevan.com/dramacoversmini/201703/25/d5bd5b1eacfaa78d8d9308998fcc88ab141649.',
        desc: '民国遗事1931'
      },
      {
        id: '04',
        url: '//static.missevan.com/dramacoversmini/201901/03/2de1a38c8ab9ad3adff24e9a2a8aa30a155918.jpg',
        desc: '结发'
      },
      {
        id: '05',
        url: '//static.missevan.com/dramacoversmini/201712/15/98174274ae26543b97398a963e3f1de5144552.jpg',
        desc: '青龙图腾'
      },
      {
        id: '06',
        url: '//static.missevan.com/dramacoversmini/201709/15/8067c70dee5365f3479219060be97f5c183923.png?x-oss-process=style/webp',
        desc: '凡心大动'
      },
      {
        id: '07',
        url: '//static.missevan.com/dramacoversmini/201604/29/0d117ff47adba269ba78b00fd65314dc072331.jpg?x-oss-process=style/webp',
        desc: '焉知非狐'
      },
      {
        id: '08',
        url: '//static.missevan.com/dramacoversmini/201712/06/9dd1a7d8ff869fce41273707d5d0f4b5004045.png?x-oss-process=style/webp',
        desc: '月亮湖泊'
      },
      {
        id: '09',
        url: '//static.missevan.com/dramacoversmini/201606/08/2879f1430dd04b3e2c5f23b2208e0572071549.jpg?x-oss-process=style/webp',
        desc: '琅琊榜'
      }]
    }
  }
}
</script>
<style lang="scss">
.img-box{
    width: 200px;
    height: 200px;
    float: left;
    margin: 10px;
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
</style>
