import { createAction } from '@reduxjs/toolkit'

import { ActionsTypes } from './constants'
import { sliceActions } from './reducer'

export const userActions = {
  ...sliceActions,

  logOut: createAction(ActionsTypes.logOut),
}
