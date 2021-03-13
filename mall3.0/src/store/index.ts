import { createStore } from 'vuex'
import user from './modules/user/index'
import getters from './getters'

export default createStore({
  modules: { user },
  getters
})
