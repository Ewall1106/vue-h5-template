import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'styles/reset.css'
import 'styles/border.css'
import 'lib-flexible/flexible.js'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
