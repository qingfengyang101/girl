import Vue from 'vue'
import Router from 'vue-router'

// 引入对应的组件
import Home from '@/components/Home';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
