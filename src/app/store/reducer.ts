import { combineReducers } from '@reduxjs/toolkit'

// TODO
import { userReducer } from '@/entities/user'

import { EStoreReducer } from './types'

// Configure your reducers
export default combineReducers({
  [EStoreReducer.user]: userReducer,
})
