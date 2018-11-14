import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'
import '@/assets/styles/override.css'
import store from './store'

Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

import { Button, AddressList, AddressEdit, Card } from 'vant';
Vue.use(Button).use(AddressList).use(AddressEdit).use(Card)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
