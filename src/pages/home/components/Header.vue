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
             <h1 class='info-title'>风华无双</h1>
             <table>
               <tbody>
                 <tr>
                   <td><span>性别</span>&nbsp;&nbsp;&nbsp;&nbsp;男</td>
                   <td><span>职业</span>&nbsp;&nbsp;&nbsp;&nbsp;中文CV</td>
                 </tr>
                 <tr>
                   <td><span>血型</span>&nbsp;&nbsp;&nbsp;&nbsp;保密</td>
                   <td><span>生日</span>&nbsp;&nbsp;&nbsp;&nbsp;1987/10/20</td>
                 </tr>
                 <tr>
                   <td><span>别名</span>&nbsp;&nbsp;&nbsp;&nbsp;格格</td>
                   <td><span>所属社团</span>&nbsp;&nbsp;&nbsp;&nbsp;怀旧配音联盟</td>
                 </tr>
                 <tr>
                   <td><span>出生地</span>&nbsp;&nbsp;&nbsp;&nbsp;江西省九江市</td>
                   <td><span>代表作品</span>&nbsp;&nbsp;&nbsp;&nbsp;青龙图腾、乱世为王、艳鬼、民国遗世1931</td>
                 </tr>
               </tbody>
             </table>
          </div>
         </div>
         <div class='content'>
           <div class='basic-info'>
             <div class='title'>基本信息</div>
              <p>怀旧配音联盟CV，微博：@明玥无双。代表作品：《青龙图腾》《乱世为王》《艳鬼》《民国遗事1931》《琅琊榜》《暮云深》《剑在天下》《结发》《独闯天涯》《给我一碗小米粥》</p>
           </div>
         </div>
        </el-tab-pane>
        <el-tab-pane label="作品展示" name="second">
          <home-list></home-list>
        </el-tab-pane>
        <el-tab-pane label="其他" name="third">其他</el-tab-pane >
       </el-tabs>
     </el-col>
   </el-row>
 </div>
</template>
<script>
import HomeList from './List'
export default {
  name: 'HomeHeader',
  components: {
    HomeList
  },
  data () {
    return {
      activeName: 'first'
    }
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
      margin-left: 25px;
      .info-title{
        font-size: 34px;
        font-weight: 700;
      }
      table{
        width: 100%;
          tbody{
            tr{
              font-size: 14px;
              height: 40px;
              border-bottom: 2px dashed #cccccc;
              td{
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
    }
  }
</style>
