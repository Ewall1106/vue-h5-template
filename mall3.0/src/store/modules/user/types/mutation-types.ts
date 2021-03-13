import { State } from './state-types'

export enum Mutation {
  SET_TOKEN = 'SET_TOKEN',
  SET_USER_INFO = 'SET_USER_INFO'
}

export type Mutations<S = State> = {
  [Mutation.SET_TOKEN](state: S, token: string): void
}
