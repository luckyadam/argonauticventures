// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueTap from 'v-tap'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

Vue.config.productionTip = false

Vue.use(VueTap)
Vue.use(vueg, router, {
  forwardAnim: 'fadeInRight',
  backAnim: 'fadeInLeft',
  shadow: false
})
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
