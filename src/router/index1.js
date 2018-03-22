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
// 风控管理
import riskcontrol from "../components/RiskControl"
// 财务管理
import charge from "../components/Charge"
import customerPay from "../components/CustomerPay"
import finance from "../components/Finance"
// 贷后管理页面
import overdue from "../components/Overdue"
import short from "../components/Short"
import processed from "../components/Processed"
// 融资管理
import stock from "../components/Stock"
import receivable from "../components/receivable"
// 详细信息
import Info from '../components/Info'
import UploadSec from '../components/UploadSec'

// GPS
import CarInfo from '../components/CarInfo'
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
          path:'uploadSec',
          name:'UploadSec',
          component:UploadSec,
          meta: {
            title: '二次录入'
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
          path:'carinfo',
          name:'CarInfo',
          component:CarInfo,
          meta: {
            title: '车辆信息'
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
        {
          path:'riskcontrol',
          name:'riskcontrol',
          component:riskcontrol,
          meta: {
            title: '风控表'
          },
        },
        {
          path:'charge',
          name:'charge',
          component:charge,
          meta: {
            title: '收费'
          },
        },
        {
          path:'customerPay',
          name:'customerPay',
          component:customerPay,
          meta: {
            title: '客户还款'
          },
        },
        {
          path:'finance',
          name:'finance',
          component:finance,
          meta: {
            title: '融资还款'
          },
        },

        {
          path:'overdue',
          name:'overdue',
          component:overdue,
          meta: {
            title: '逾期客户'
          },
        },
        {
          path:'short',
          name:'short',
          component:short,
          meta: {
            title: '缺件客户'
          },
        },
        {
          path:'processed',
          name:'processed',
          component:processed,
          meta: {
            title: '已处理的客户'
          },
        },
        {
          path:'stock',
          name:'stock',
          component:stock,
          meta: {
            title: '进件表'
          },
        },
        {
          path:'receivable',
          name:'receivable',
          component:receivable,
          meta: {
            title: '回款确认'
          },
        },
      ]
    },

  ]
})
