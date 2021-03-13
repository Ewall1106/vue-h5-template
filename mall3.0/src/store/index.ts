import { createStore } from 'vuex'
import user from './modules/user/index'

export default createStore({
  modules: { user }
})
