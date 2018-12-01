import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrivateHome from '@/components/private/home'
import writesay from '@/components/private/say/writeSay'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/private/home',
      name: 'PrivateHome',
      component: PrivateHome
    },
    {
      path: '/private/writesay',
      name: 'writesay',
      component: writesay
    }
  ]
})
