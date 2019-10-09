import Vue from 'vue'
import Router from 'vue-router'
// 引入各个组件
import Home from '../views/home'
import Login from '../views/login'
import Order from '../views/orders/order'
// 使用路由
Vue.use(Router)
// 创建路由对象
export default new Router({
  // 添加路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      // 添加路由重定向
      // redirect: {},
      // 添加嵌套路由
      children: [
        // {
        //  name: 'users',
        //  path: 'users',
        //  // 懒路由配置,用到才加载该组件
        //  component: () => import(/* webpackChunkName:"about" */'./views/user/users.vue')
        // }

      ]
    },
    {
      name: 'order',
      path: '/order',
      component: Order
    }
  ]
})

// 添加导航守卫
/* router.beforeEach((to, from, next) => {
  // console.log(to)
  // 判断用户是否登陆过或者是否跳转到login页,判断是否存在token值，如果是则继续进行业务操作
  var token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    // 否则,重定向到登陆页
    next({ name: 'login' })
  }
}) */
