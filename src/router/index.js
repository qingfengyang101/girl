import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/components/Login.vue")
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import("@/components/Home.vue")
    },
    {
      path: '/boy',
      name: 'Boy',
      component: () => import("@/components/Boy.vue")
    },
    {
      path: '/wife',
      name: 'Wife',
      component: () => import("@/components/Wife.vue")
    },
    {
      path: '/',
      name: '/',
      redirect: '/login',
      component: () => import('@/components/Login')
    },
    {
      path: '/checkUserLogin',
      name: 'CheckUserLogin',
      component: () => import('@/components/CheckUserLogin'),
    }
  ]
})
