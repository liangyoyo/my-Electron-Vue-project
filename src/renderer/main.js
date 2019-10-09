import Vue from 'vue'
import axios from 'axios'
import App from './App'
/* 引入路由 */
import router from './router'
/* 引入store */
import store from './store'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共样式文件
import '../common/css/index'
// 优化页面的滑动性能
import 'default-passive-events'
// 引入mock.js
require('../mock/mock.js')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
/* 让vue使用ElementUI */
Vue.use(ElementUI)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
