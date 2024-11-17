import { combineReducers } from '@reduxjs/toolkit'

import { noteReducer } from '@/entities/note'
import { userReducer } from '@/entities/user'

import { EStoreReducer } from './types'

// Configure your reducers
export default combineReducers({
  [EStoreReducer.user]: userReducer,
  [EStoreReducer.note]: noteReducer,
})
