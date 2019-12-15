<template>
 <div class='homePage'>
   <el-row>
     <el-col :span="16" :offset="4">
       <el-tabs v-model="activeName">
        <el-tab-pane label="CV档案"  name="first">
         <div>
          <div class='head-img'>
            <img src="@/assets/格格.jpg" alt="#"/>
          </div>
          <div class='info'>
            <dl class='info-left'>
              <dt>中文名 </dt>
              <dd>风华无双</dd>
              <dt>别名</dt>
              <dd>格格</dd>
              <dt>国籍</dt>
              <dd>中国</dd>
              <dt>出生地</dt>
              <dd>江西省九江市</dd>
              <dt>出生日期</dt>
              <dd>1987年10月20日</dd>
              <dt>职业</dt>
              <dd>配音演员</dd>
              <dt>代表作品</dt>
              <dd>青龙图腾、乱世为王、艳鬼、民国遗事1931、焉知非狐、暮云深、琅琊版、剑在天下、独闯天涯广播剧</dd>
            </dl>
            <dl class="info-right">
              <dt>性别</dt>
              <dd>男</dd>
              <dt>星座</dt>
              <dd>天秤座</dd>
              <dt>声音特色</dt>
              <dd>独一无二绝美音色（无脑吹）</dd>
              <dt>爱好</dt>
              <dd>啃瓶子，找真爱</dd>
              <dt>社团</dt>
              <dd>怀旧配音联盟</dd>
              <dt>身高</dt>
              <dd>173</dd>
              <dt>现居地</dt>
              <dd>日本</dd>
            </dl>
          </div>
         </div>
        </el-tab-pane>
        <el-tab-pane label="作品展示" name="second">作品展示</el-tab-pane>
        <el-tab-pane label="其他" name="third">其他</el-tab-pane >
       </el-tabs>
     </el-col>
   </el-row>
 </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang="scss" scoped>
  .homePage{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgb(238, 244, 248);
    .head-img{
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 10px;
     img{
      width: 100px;
      height: 100px;
     }
    }
    .info{
      width: 900px;
      float: right;
      .info-left{
        display: inline-block;
        width:440px;
      }
      .info-right{
        display: inline-block;
        width:440px;                                                                                                                                                                                                                     
      }
    }
  }
</style>
