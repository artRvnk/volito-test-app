import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TUser } from '../models'

import { TInitialState } from './types'

const initialState: TInitialState = {
  user: null,
  location: null,

  loading: false,
}

export const slice = createSlice({
  name: EStoreReducer.user,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setUser: (state, { payload }: PayloadAction<TUser>) => {
      state.user = payload
    },
    updateUser: (state, { payload }: PayloadAction<Partial<TUser> | null>) => {
      if (payload && state.user) {
        state.user = {
          ...state.user,
          ...payload,
        }
      }
    },
    clearUser: state => {
      state.user = null
    },

    setLocation: (
      state,
      { payload }: PayloadAction<TInitialState['location']>,
    ) => {
      state.location = payload
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
