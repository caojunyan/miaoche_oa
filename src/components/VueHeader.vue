<template>
    <div class="header">
      <b class="logo">
        秒个车ERP系统
      </b>
      <span class="operate">
        <span class="login_name">你好，{{username}}</span>
        <span class="repassword">
          <router-link :to="{path:'/home/changePass'}">修改密码</router-link>
        </span>
        <span>
          <router-link :to="{path:'/'}">退出</router-link>
        </span>
      </span>
    </div>
</template>

<script>
    export default {
      name: "vue-header",
      data(){
          return {
            username:''
          }
        },
      mounted(){
        this.getUsername()
      },
      methods:{
        // 读取用户名
        getUsername(){
          this.username=localStorage.getItem('loginname')
        }
      }
    }
</script>

<style scoped lang="stylus">
  .header
    width 100%
    height 80px
    background #545C64
    position fixed
    top 0px
    left 0px
    .logo
      font-size 25px
      color #fff
      line-height 80px
      padding-left 20px
      display inline-block
      font-weight 400
    .operate
      width 20%
      float right
      display inline-block
      color:#fff
      line-height 80px
      span
        display inline-block
        padding-right 20px
        a
          color:#fff


</style>
