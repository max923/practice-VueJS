import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home'
import Product from '@/container/Product'

Vue.use(Router)

export default new Router({
  // default mode is hash
  // https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})