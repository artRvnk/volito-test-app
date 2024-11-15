import { createAction } from '@reduxjs/toolkit'

import { ActionsTypes } from './constants'
import { sliceActions } from './reducer'

export const noteActions = {
  ...sliceActions,

  logOut: createAction(ActionsTypes.logOut),
}
