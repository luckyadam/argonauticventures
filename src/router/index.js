import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Asset from '@/pages/Asset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/asset',
      name: 'Asset',
      component: Asset
    }
  ]
})
