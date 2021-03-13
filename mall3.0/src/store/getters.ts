import { GetterTree } from 'vuex'
import { State as UserState } from './modules/user/types/state-types'

export interface State {
  user: UserState
  // ...
}

export type Getters = {
  getUid(state: State): string | undefined
  getToken(state: State): string | undefined
  // ...
}

const getters: GetterTree<State, State> & Getters = {
  getUid: state => state.user.userInfo.uid,
  getToken: state => state.user.token
}

// const getters = {
//   // base info
//   uid: state => state.user.uid,
//   token: state => state.user.token,
//   userInfo: state => state.user.userInfo
// }

export default getters
