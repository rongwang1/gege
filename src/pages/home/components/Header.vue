<template>
 <div class='homePage'>
   <el-row>
     <el-col :span="16" :offset="4">
       <el-tabs v-model="activeName">
        <el-tab-pane label="CV档案"  name="first">
         <div class='head'>
          <div class='head-img'>
            <img src="//static.missevan.com/seiys/201604/556eb6ac9553e75d0fd8bee5148238bf182357.jpg" alt="#"/>
          </div>
          <div  class=info>
             <h1 class='info-title'>风华无双
               <a href="http://weibo.com/fenghuawushuang" class='iconfont  sina' target="_blank"><i>&#xe716;</i></a>
               <a href="http://baike.baidu.com/view/3293213.htm" class='iconfont baidu' target='_blank'><i>&#xe846;</i></a>
             </h1>
             <table>
               <tbody>
                 <tr v-for="item in info" :key="item.id">
                   <td><span>{{item.key1}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.value1}}</td>
                   <td><span>{{item.key2}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.value2}}</td>
                 </tr>
               </tbody>
             </table>
          </div>
         </div>
         <div class='content'>
           <div class='basic-info'>
             <div class='title'>基本信息</div>
              <p class='intro'>怀旧配音联盟CV，微博：@明玥无双。代表作品：《青龙图腾》《乱世为王》《艳鬼》《民国遗事1931》《琅琊榜》《暮云深》《剑在天下》《结发》《独闯天涯》《给我一碗小米粥》</p>
           </div>
           <div class="title">配音作品</div>
           <div class='main-content' v-for="item of list" :key="item.id">
              <div class="item-type">{{item.type}}</div>
              <p>{{item.content}}  </p>
           </div>
         </div>
        </el-tab-pane>
        <el-tab-pane label="作品展示" name="second">
          <home-list :swiperList="swiperList"></home-list>
        </el-tab-pane>
        <el-tab-pane label="其他" name="third">
        </el-tab-pane >
       </el-tabs>
     </el-col>
   </el-row>
 </div>
</template>
<script>
import HomeList from './List'
export default {
  name: 'HomeHeader',
  props: {
    list: Array,
    info: Array
  },
  components: {
    HomeList
  },
  data () {
    return {
      swiperList: [],
      activeName: 'first'
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
        this.swiperList = data.swiperList
      }
    }
  },
  mounted () {
    this.getContentInfo()
  }
}
</script>
<style lang="scss" scoped>
  .homePage{
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgb(238, 244, 248);
    .head{
      position: relative;
      width: 100%;
      height: 220px;
      margin-top:10px;
      .head-img{
        width: 220px;
        height: 220px;
        float: left;
        img{
          width: 100%;
          height:100%;
          display: block
        }
      }
    }
    .info{
      float: left;
      width: 400px;
      margin-left: 30px;
      .info-title{
        font-size: 34px;
        font-weight: 700;
        .iconfont{
         font-size: 26px;
         font-weight: 50;
         color: #cccccc
        }
        .sina:hover{
          color:#C20C0C;
        }
        .baidu:hover{
          color: #3385ff;
        }
      }
      table{
        width: 100%;
          tbody{
            tr{
              font-size: 14px;
              height: 40px;
              border-bottom: 2px dashed #cccccc;
              td{
                padding-right: 10px;
                span{
                  color: #9b9797
                }
              }
            }
          }
        }
    }
    .content{
      width: 100%;
      margin-top: 30px;
      .basic-info{
        .intro{
         display: block;
         margin-top: 10px;
         line-height: 22px;
        }
      }
      .main-content{
        .item-type{
          font-weight: bold;
          margin-left: 15px;
          line-height: 20px
        }
        p{
          line-height: 30px;
        }
      }
    }
  }
</style>
