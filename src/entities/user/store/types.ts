import { TUser } from '../models'

export type TInitialState = {
  user: TUser | null
  loading: boolean
}
