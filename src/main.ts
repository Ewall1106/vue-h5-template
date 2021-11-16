import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons/index'
import './styles/index.scss'

import './utils/auth'
import './utils/permission'

import vant from '@/components/Vant'

// eslint-disable-next-line
createApp(App)
  .use(store)
  .use(router)
  .use(vant)
  .mount('#app')
