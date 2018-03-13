<template>
    <div class="left">
      <el-row class="tac left-nav">
        <el-col :span="24">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened=true>
            <el-submenu index="1">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-kehuguanli3"></use>
                </svg>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link :to="{path:'/home/selectClient'}">客户查询</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link :to="{path:'/home/addClient'}">客户录入</router-link>
                </el-menu-item>
                <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cheliangguanli-"></use>
                </svg>
                <span>车辆管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fengxianguankong"></use>
                </svg>
                <span>风控管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-caiwuguanli3"></use>
                </svg>
                <span>财务管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fengxianguankong"></use>
                </svg>
                <span>贷后管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-caiwuguanli"></use>
                </svg>
                <span>融资管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">选项1</el-menu-item>
                <el-menu-item index="6-2">选项2</el-menu-item>
                <el-menu-item index="6-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "../common/css/base.styl"
.left
  height 850px
  width 213px;
  background #545C64
  position fixed
  top 85px
  bottom 0
  left 0
  .el-menu
    border none
    a
      color:#fff
      display inline-block
      width 100%
      height 100%
      &.active
        color:#FFD04D
</style>
