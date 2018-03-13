import Vue from 'vue'
import Router from 'vue-router'
// 登陆
import Login from '../components/Login'
import Home from '../components/Home'
import ChangePass from '../components/ChangePass'
// 客户管理
import SelectClient from '../components/SelectClient'
import AddClient from '../components/AddClient'
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
          path:'selectClient',
          name:'selectClient',
          component:SelectClient,
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
      ]
    },

  ]
})
