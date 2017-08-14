import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

const About = () => import('@/pages/About.vue')
const Asset = () => import('@/pages/Asset.vue')
const Co = () => import('@/pages/Co.vue')

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/co',
      name: 'Co',
      component: Co
    }
  ]
})
