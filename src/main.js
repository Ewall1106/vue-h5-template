import Vue from 'vue'

import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './icons'
import './permission'

import * as filters from '@/filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// register common components globally
import '@/components/Vant'
import '@/components/common'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
