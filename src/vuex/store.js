import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import modules from './modules'
Vue.use(Vuex)
// 首先声明一个状态 state
var state = {
  count: 0,
  userInfo: "",
  token: ""
}
// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
const store = new Vuex.Store({
  modules: {
    modules
  }
})
export default store