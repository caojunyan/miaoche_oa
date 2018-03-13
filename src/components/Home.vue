<template>
 <div class="home">
   <my-header></my-header>
   <my-left></my-left>
   <div class="main">
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
  import MyHeader from '../components/VueHeader'
  import MyLeft from '../components/VueLeft'
export default {
  name: 'Home',
  components:{
    MyHeader,
    MyLeft
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
</style>
