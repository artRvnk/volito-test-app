import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TNote } from '../models'

import { TInitialState, TGetNotesStore } from './types'

const initialState: TInitialState = {
  notes: [],
  notesCount: 0,

  loading: false,
}

export const slice = createSlice({
  name: EStoreReducer.note,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setNotes: (state, { payload }: PayloadAction<TGetNotesStore>) => {
      // console.log('setNotes-payload', payload)

      const notes = payload.map(snapshot => {
        const data = snapshot.data()

        return {
          ...(data as TNote),
          key: snapshot.id,
        }
      })

      // console.log('setNotes-notes', notes)

      state.notes = notes
    },
    setMoreNotes: (state, { payload }: PayloadAction<TGetNotesStore>) => {
      const notes = payload.map(snapshot => {
        const data = snapshot.data()

        return {
          ...(data as TNote),
          key: snapshot.id,
        }
      })

      const uniqueNotes = notes.filter(
        newNote =>
          !state.notes.some(existingNote => existingNote.id === newNote.id),
      )

      // Concatenate only the unique notes
      state.notes = state.notes.concat(uniqueNotes)

      // state.notes = state.notes.concat(notes)
    },
    setNotesCount: (state, { payload }: PayloadAction<number>) => {
      // console.log('setNotesCount-payload', payload)

      state.notesCount = payload
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
