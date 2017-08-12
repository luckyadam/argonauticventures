import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'default',
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
    }
  ]
})
