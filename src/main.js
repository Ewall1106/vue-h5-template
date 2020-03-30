import Vue from 'vue'

// A modern alternative to CSS resets
// https://github.com/necolas/normalize.css
import 'normalize.css/normalize.css'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './icons'
import './permission'

// import vant
import '@/components/Vant'
// register common components globally
import '@/components/common'

// mock in online
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
