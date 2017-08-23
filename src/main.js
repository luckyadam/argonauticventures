// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueTap from 'v-tap'
import VuePaginate from 'vue-paginate'

import * as filters from './filters'

Vue.config.productionTip = false

Vue.use(VueTap)
Vue.use(VueLazyload)
Vue.use(VuePaginate)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  el: '#app',
  data () {
    return {
      loading: false
    }
  },
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  app.loading = true
  next()
})

router.afterEach(() => {
  app.loading = false
})
