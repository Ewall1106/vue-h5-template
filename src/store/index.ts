import { createStore } from 'vuex'
import { user, UserState } from './modules/user'

export interface GlobalProp {
  user: UserState
}

export default createStore({
  modules: { user }
})
