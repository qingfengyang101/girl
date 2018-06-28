import Vue from 'vue'
import Router from 'vue-router'

// 引入对应的组件
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
