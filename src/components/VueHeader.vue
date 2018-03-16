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
        <span @click="out">
          退出
        </span>
      </span>
    </div>
</template>

<script>
  import {loginOut,getUser} from "../api/api";

  export default {
      name: "vue-header",
      data(){
          return {
            username:''
          }
        },
      mounted(){
        getUser(this).then((data)=>{
          if (data) {
            this.username = data.data.name;
          }
        })
      },
      methods:{
        // 退出登陆
        out(){
          loginOut(this).then(function(res){
              console.log(res)
          })
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
        cursor pointer
        a
          color:#fff


</style>
