import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login'],resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/boy',
      name: 'Boy',
      component: resolve => require(['@/components/Boy'], resolve)
    },
    {
      path: '/wife',
      name: 'Wife',
      component: resolve => require(['@/components/Wife'], resolve)
    },
    {
      path: '/',
      name: '/',
      redirect: '/login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/checkUserLogin',
      name: 'CheckUserLogin',
      component: resolve => require(['@/components/CheckUserLogin'], resolve),
    }
  ]
})
