import { GetInfoResponse } from '@/api'

export interface State {
  token: string | undefined
  userInfo: GetInfoResponse
}
