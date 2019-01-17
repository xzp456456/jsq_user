import Vue from 'vue'
import Router from 'vue-router'
import addEquipment from '@/pages/equip/addEquipment'
import distributor from '@/pages/equip/distributor'
import Element from '@/pages/order/Element'
import equipment from '@/pages/equip/equipment'
import feedback from '@/pages/self/feedback'
import index from '@/pages/equip/index'
import myInfo from '@/pages/self/myInfo'
import order from '@/pages/order/order'
import recharge from '@/pages/order/recharge'
import record from '@/pages/equip/record'
import repair from '@/pages/repair/repair'
import roll from '@/pages/repair/roll'
import self from '@/pages/self/self'
import shareGift from '@/pages/self/shareGift'
import suggestion from '@/pages/self/suggestion'
import Waterrecords from '@/pages/repair/Waterrecords'
import wd from '@/pages/self/wd'
import code from '@/pages/code'
import manage from '@/pages/equip/manage'
import share from '@/pages/share'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/share',
      name:'share',
      component:share
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    },
    {
      path:'/code',
      name:'code',
      component:code,
      meta:{
        title:'授权'
      }
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'设备'
      }
    },
    {
      path: '/addEquipment',
      name: 'addEquipment',
      component: addEquipment,
      meta:{
        title:'添加设备'
      }
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: distributor,
      meta:{
        title:'经销商信息'
      }
    },
    {
      path: '/element',
      name: 'element',
      component: Element,
      meta:{
        title:'我的滤芯'
      }
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: equipment,
      meta:{
        title:'我的设备'
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback,
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo,
      meta:{
        title:'个人信息'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta:{
        title:'我的订单'
      }
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge,
      meta:{
        title:'我要充值'
      }
    },
    {
      path: '/record',
      name: 'record',
      component: record,
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair,
      meta:{
        title:'设备报修'
      }
    },
    {
      path: '/roll',
      name: 'roll',
      component: roll
    },
    {
      path: '/self',
      name: 'self',
      component: self,
      meta:{
        title:'我的设备'
      }
    },
    {
      path: '/shareGift',
      name: 'shareGift',
      component: shareGift,
      meta:{
        title:'我的推广'
      }
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: suggestion,
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/Waterrecords',
      name: 'Waterrecords',
      component: Waterrecords,
      meta:{
        title:'用水记录'
      }
    },
    {
      path: '/wd',
      name: 'wd',
      component: wd,
      meta:{
        title:'我的'
      }
    }
  ]
})
