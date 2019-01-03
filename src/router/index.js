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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/addEquipment',
      name: 'addEquipment',
      component: addEquipment
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: distributor
    },
    {
      path: '/element',
      name: 'element',
      component: Element
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: equipment
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair
    },
    {
      path: '/roll',
      name: 'roll',
      component: roll
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/shareGift',
      name: 'shareGift',
      component: shareGift
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: suggestion
    },
    {
      path: '/Waterrecords',
      name: 'Waterrecords',
      component: Waterrecords
    },
    {
      path: '/wd',
      name: 'wd',
      component: wd
    }
  ]
})
