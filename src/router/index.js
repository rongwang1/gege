import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Startup',
      component: () => import('@/pages/startup/Startup')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }
  ]
})
