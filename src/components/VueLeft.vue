<template>
    <div class="left">
      <el-row class="tac left-nav">
        <el-col :span="24">
          <el-menu
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
                <el-menu-item index="2-1">
                  <router-link :to="{path:'/home/gpsInstall'}">GPS安装</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link :to="{path:'/home/gpsSelect'}">GPS查询</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link :to="{path:'/home/credit'}">贷中状态</router-link>
                </el-menu-item>
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
                <el-menu-item index="3-1">
                  <router-link :to="{path:'/home/riskcontrol'}">风控表</router-link>
                </el-menu-item>
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
                <el-menu-item index="4-1">
                  <router-link :to="{path:'/home/charge'}">收费</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <router-link :to="{path:'/home/customerPay'}">客户还款</router-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                  <router-link :to="{path:'/home/finance'}">融资还款</router-link>
                </el-menu-item>
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
                <el-menu-item index="5-1">
                  <router-link :to="{path:'/home/overdue'}">逾期客户</router-link>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <router-link :to="{path:'/home/short'}">缺件客户</router-link>
                </el-menu-item>
                <el-menu-item index="5-3">
                  <router-link :to="{path:'/home/processed'}">已处理的客户</router-link>
                </el-menu-item>
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
                <el-menu-item index="6-1">
                  <router-link :to="{path:'/home/stock'}">进件表</router-link>
                </el-menu-item>
                <el-menu-item index="6-2">
                  <router-link :to="{path:'/home/receivable'}">回款确认</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <!--<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" theme="dark">
            <el-submenu v-for="(item,index) in this.$router.options.routes[1].children" :index="item.name" v-if="!item.hidden">
              <template slot="title">{{item.meta.title}}</template>
              <el-menu-item v-for="(nav,number) in item.children" :index="nav.name" @click="toUrl(nav)">{{nav.meta.title}}</el-menu-item>
            </el-submenu>
          </el-menu>-->
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        defaultActive: this.$route.name,
      }
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      toUrl: function(item) {
        this.$router.push({ name: item.name });
      },
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
