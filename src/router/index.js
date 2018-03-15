import Vue from 'vue'
import Router from 'vue-router'
// 登陆
import Login from '../components/Login'
import Home from '../components/Home'
import ChangePass from '../components/ChangePass'
// 客户管理
import SelectClient from '../components/SelectClient'
import AddClient from '../components/AddClient'
// 车辆管理
import GpsInstall from '../components/GpsInstall'
import GpsSelect from '../components/GpsSelect'
import Credit from '../components/Credit'
// 详细信息
import Info from '../components/Info'
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'active',
  linkExactActiveClass: false,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        title:'海创'
      }
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      redirect: '/home/selectClient',
      children:[
        {
          path:'changePass',
          name:'changepass',
          component:ChangePass,
          meta: {
            title: '修改密码'
          },
        },
        {
          path: 'selectClient',
          name: 'selectClient',
          component: SelectClient,
          meta: {
            title: '客户查询'
          },
        },
        {
          path:'addClient',
          name:'addClient',
          component:AddClient,
          meta: {
            title: '客户录入'
          },
        },
        {
          path:'info',
          name:'Info',
          component:Info,
          meta: {
            title: '客户详情'
          },
        },
        {
          path:'gpsInstall',
          name:'gpsInstall',
          component:GpsInstall,
          meta: {
            title: 'GPS安装'
          },
        },
        {
          path:'gpsSelect',
          name:'gpsSelect',
          component:GpsSelect,
          meta: {
            title: 'GPS查询'
          },
        },
        {
          path:'credit',
          name:'credit',
          component:Credit,
          meta: {
            title: '贷中状态'
          },
        },
      ]
    },

  ]
})
