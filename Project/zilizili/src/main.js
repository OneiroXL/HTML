// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
import Api from './api/axios.js'
import Notify from './assets/js/notify.js'

Vue.config.productionTip = false

Vue.prototype.$api = Api;
Vue.prototype.$Notify = Notify;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

