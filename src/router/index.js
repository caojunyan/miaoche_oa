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
      children:[
        {
          path:'changePass',
          name:'changepass',
          component:ChangePass
        },
        {
          path:'selectClient',
          name:'selectClient',
          component:SelectClient
        },
        {
          path:'addClient',
          name:'addClient',
          component:AddClient
        },
      ]
    },

  ]
})
