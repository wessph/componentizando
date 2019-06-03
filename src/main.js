// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Notifications)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      authenticated: false
    }
  },
  created () {
    if (localStorage.getItem('userComponent')){
      return this.authenticated = true
    }
    return false
  }
})