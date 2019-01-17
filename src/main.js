// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';
import 'mint-ui/lib/style.css';

import { Picker,Popup,Toast,InfiniteScroll,Loadmore } from 'mint-ui';
Vue.prototype.Toast = Toast;
Vue.component(Picker.name,Picker);
Vue.component(Popup.name, Popup);
Vue.component(Loadmore.name, Loadmore);
Vue.use(InfiniteScroll);
Vue.config.productionTip = false
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
