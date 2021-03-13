import { Commit } from 'vuex'
import { State } from './state-types'
import { SignupRequest } from '@/api'

export enum Action {
  SING_IN = 'SING_IN'
}

export interface Actions {
  [Action.SING_IN](
    { commit }: { commit: Commit; state: State },
    payload: SignupRequest
  ): Promise<string>
}
