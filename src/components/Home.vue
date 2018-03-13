<template>
 <div class="home">
   <my-header></my-header>
   <my-left></my-left>
   <div class="main">
     <!--面包屑导航-->
     <div class="bread">
       <el-breadcrumb separator-class="el-icon-arrow-right" >
         <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item v-for="(item,index) in breadcrumb" :to="item.path" :keys="index">{{item.value}}</el-breadcrumb-item>
       </el-breadcrumb>
     </div>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
  import MyHeader from '../components/VueHeader'
  import MyLeft from '../components/VueLeft'
export default {
  name: 'Home',
  data(){
    return{
      breadcrumb:[]
    }
  },
  components:{
    MyHeader,
    MyLeft
  },
  /*beforeRouteUpdata(to,from,next){
    this.breadcrumb[0] = {
      value: to.meta.title,
      path: to.path
    };
    next()
  },*/
  watch:{
    "$route":"fetchDate"
  },
  mounted(){
  /*  this.breadcrumb[0]={
      value:this.$route.meta.title,
      path:this.$route.path
    };*/
  },
  methods: {
    fetchDate(){
      this.breadcrumb[0]={
        value:this.$route.meta.title,
        path:this.$route.path
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../common/css/base.styl"
.main
  left:235px
  top:85px;
  position:absolute;
  right:0;
  bottom:0;  //left,top,right,bottom都为0，充满真个页面
  overflow-y:auto;
  overflow-x:hidden
  .bread
    width 100%
    height 40px
    line-height 40px
    margin-bottom 20px
    .el-breadcrumb
      height 40px
      span
        display inline-block
        height 40px
        line-height 40px

</style>
