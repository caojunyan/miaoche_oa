<template>
 <div class="home">
   <my-header></my-header>
   <my-left></my-left>
   <div class="main">
     <!--面包屑导航-->
     <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
       <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
       <el-breadcrumb-item v-for="item in breadcrumb" :to="item.path">{{item.value}}</el-breadcrumb-item>
     </el-breadcrumb>
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
  beforeRouteUpdata(to,from,next){
    this.breadcrumb[0] = {
      value: to.meta.title,
      path: to.path
    };
    next()
  },
  mounted(){
    this.breadcrumb[0]={
      value:this.$route.meta.title,
      path:this.$route.path
    };
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../common/css/base.styl"
.main
  position fixed
  left:235px
  top:85px;
  .bread
    width 100%
    height 40px
    line-height 40px
    span
      font-size 16px
</style>
