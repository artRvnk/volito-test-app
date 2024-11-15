import { TNote } from '../models'

export type TInitialState = {
  user: TNote | null
  loading: boolean
}
