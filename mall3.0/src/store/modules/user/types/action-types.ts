import { Commit } from 'vuex'
import { State } from './state-types'
import { SignupRequest, GetInfoResponse } from '@/api'

export enum Action {
  SING_IN = 'SING_IN',
  GET_INFO = 'GET_INFO',
  SING_OUT = 'SING_OUT'
}

export interface Actions {
  // 用户登录
  [Action.SING_IN](
    { commit }: { commit: Commit; state: State },
    payload: SignupRequest
  ): Promise<string>
  // 用户登出
  [Action.SING_OUT]({ commit }: { commit: Commit; state: State }): Promise<void>
  // 用户信息
  [Action.GET_INFO]({
    commit
  }: {
    commit: Commit
    state: State
  }): Promise<GetInfoResponse>
}
