import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/auth'
import './styles/index.scss'

import vant from '@/components/Vant'

createApp(App)
  .use(store)
  .use(router)
  .use(vant)
  .mount('#app')
