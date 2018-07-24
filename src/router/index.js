import Vue from 'vue'
import Router from 'vue-router'

// 引入对应的组件
import Home from '@/components/Home';
import Login from '@/components/Login';
import Boy from '@/components/Boy';
import Wife from '@/components/Wife';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/boy',
      name: 'Boy',
      component: Boy
    },
    {
      path: '/wife',
      name: 'Wife',
      component: Wife
    }
  ]
})
