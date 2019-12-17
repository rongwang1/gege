<template>
  <div>
    <div class='img-box' v-for='item of imgList' :key='item.id'>
      <el-card :body-style="{padding:'5px'}" >
        <img :src="item.url" class='image'/>
        <div>
         <span>摄政王</span>
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
        url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cad93e9fb11c8701d6b6b5e01f44f912/e1fe9925bc315c60d002eb948fb1cb1349547732.jpg'
      },
      {
        id: '02',
        url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cad93e9fb11c8701d6b6b5e01f44f912/e1fe9925bc315c60d002eb948fb1cb1349547732.jpg'
      },
      {
        id: '03',
        url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cad93e9fb11c8701d6b6b5e01f44f912/e1fe9925bc315c60d002eb948fb1cb1349547732.jpg'
      },
      {
        id: '04',
        url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cad93e9fb11c8701d6b6b5e01f44f912/e1fe9925bc315c60d002eb948fb1cb1349547732.jpg'
      },
      {
        id: '05',
        url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cad93e9fb11c8701d6b6b5e01f44f912/e1fe9925bc315c60d002eb948fb1cb1349547732.jpg'
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
    }
}
</style>
