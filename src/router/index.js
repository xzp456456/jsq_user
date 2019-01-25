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
import { resolve } from 'path';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/share',
      name:'share',
      component:resolve=>require(['@/pages/share'],resolve)
    },
    {
      path:'/manage',
      name:'manage',
      component:resolve=>require(['@/pages/equip/manage'],resolve)
    },
    {
      path:'/code',
      name:'code',
      component:resolve=>require(['@/pages/code'],resolve),
      meta:{
        title:'授权'
      }
    },
    {
      path: '/',
      name: 'index',
      component: resolve=>require(['@/pages/equip/index'],resolve),
      meta:{
        title:'设备'
      }
    },
    {
      path: '/addEquipment',
      name: 'addEquipment',
      component: resolve=>require(['@/pages/equip/addEquipment'],resolve),
      meta:{
        title:'添加设备'
      }
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: resolve=>require(['@/pages/equip/distributor'],resolve),
      meta:{
        title:'经销商信息'
      }
    },
    {
      path: '/element',
      name: 'element',
      component: resolve=>require(['@/pages/order/Element'],resolve),
      meta:{
        title:'我的滤芯'
      }
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: resolve=>require(['@/pages/equip/equipment'],resolve),
      meta:{
        title:'我的设备'
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: resolve=>require(['@/pages/self/feedback'],resolve),
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: resolve=>require(['@/pages/self/myInfo'],resolve),
      meta:{
        title:'个人信息'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve=>require(['@/pages/order/order'],resolve),
      meta:{
        title:'我的订单'
      }
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: resolve=>require(['@/pages/order/recharge'],resolve),
      meta:{
        title:'我要充值'
      }
    },
    {
      path: '/record',
      name: 'record',
      component: resolve=>require(['@/pages/equip/record'],resolve),
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/repair',
      name: 'repair',
      component: resolve=>require(['@/pages/repair/repair'],resolve),
      meta:{
        title:'设备报修'
      }
    },
    {
      path: '/roll',
      name: 'roll',
      component: resolve=>require(['@/pages/repair/roll'],resolve)
    },
    {
      path: '/self',
      name: 'self',
      component: resolve=>require(['@/pages/self/self'],resolve),
      meta:{
        title:'我的设备'
      }
    },
    {
      path: '/shareGift',
      name: 'shareGift',
      component: resolve=>require(['@/pages/self/shareGift'],resolve),
      meta:{
        title:'我的推广'
      }
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: resolve=>require(['@/pages/self/suggestion'],resolve),
      meta:{
        title:'意见反馈'
      }
    },
    {
      path: '/Waterrecords',
      name: 'Waterrecords',
      component: resolve=>require(['@/pages/repair/Waterrecords'],resolve),
      meta:{
        title:'用水记录'
      }
    },
    {
      path: '/wd',
      name: 'wd',
      component: resolve=>require(['@/pages/self/wd'],resolve),
      meta:{
        title:'我的'
      }
    },
    {
      path: '/qualification',
      name: 'qualification',
      component: resolve=>require(['@/pages/menu/qualification'],resolve),
      meta:{
        title:'云密码互联网平台'
      }
    },
    {
      path: '/helpDevice',
      name: 'helpDevice',
      component: resolve=>require(['@/pages/menu/helpDevice'],resolve),
      meta:{
        title:'设备代充'
      }
    },
    {
      path:'/helpDel',
      name: 'helpDel',
      component: resolve=>require(['@/pages/menu/helpDel'],resolve),
      meta:{
        title:'设备代充'
      }
    }
  ]
})
