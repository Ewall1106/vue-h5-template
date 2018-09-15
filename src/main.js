import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'
import 'vant/lib/vant-css/index.css';
import '@/assets/styles/override.css'

Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

import { Button, AddressList } from 'vant';
Vue.use(Button).use(AddressList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
