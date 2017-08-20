import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

const About = () => import('@/pages/About.vue')
const Asset = () => import('@/pages/Asset.vue')
const Co = () => import('@/pages/Co.vue')
const Contact = () => import('@/pages/Contact.vue')
const CoreEthos = () => import('@/pages/CoreEthos.vue')
const HfAsset = () => import('@/pages/HfAsset.vue')
const VcAsset = () => import('@/pages/VcAsset.vue')
const Terms = () => import('@/pages/Terms.vue')

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
      path: '/co-investor-network',
      name: 'Co',
      component: Co
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/core-ethos',
      name: 'CoreEthos',
      component: CoreEthos
    },
    {
      path: '/hf-asset-class',
      name: 'HfAsset',
      component: HfAsset
    },
    {
      path: '/terms-of-use',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/vc-asset-class',
      name: 'VcAsset',
      component: VcAsset
    }
  ]
})
