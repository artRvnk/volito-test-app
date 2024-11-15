import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TNote } from '../models'

import { TInitialState } from './types'

const initialState: TInitialState = {
  user: null,
  loading: false,
}

export const slice = createSlice({
  name: EStoreReducer.note,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setNote: (state, { payload }: PayloadAction<TNote>) => {
      state.user = payload
    },
    updateUser: (state, { payload }: PayloadAction<Partial<TNote> | null>) => {
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
  },
})

export const sliceActions = slice.actions

export default slice.reducer
