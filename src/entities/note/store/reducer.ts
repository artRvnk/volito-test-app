import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TNote } from '../models'

import { TInitialState, TGetNotesStore, TPostNoteStore } from './types'

const initialState: TInitialState = {
  notes: [],
  notesCount: 0,

  currentNote: null,

  loading: false,
}

export const slice = createSlice({
  name: EStoreReducer.note,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setNotes: (state, { payload }: PayloadAction<TGetNotesStore>) => {
      state.notes = payload
    },
    setMoreNotes: (state, { payload }: PayloadAction<TGetNotesStore>) => {
      const uniqueNotes = payload.filter(
        newNote =>
          !state.notes.some(existingNote => existingNote.id === newNote.id),
      )

      state.notes = state.notes.concat(uniqueNotes)
    },
    setNotesCount: (state, { payload }: PayloadAction<number>) => {
      state.notesCount = payload
    },

    setDeleteNote: (state, { payload }: PayloadAction<string>) => {
      state.notes = state.notes.filter(el => el._id !== payload)
      state.notesCount--
    },

    setLocalNote: (state, { payload }: PayloadAction<TPostNoteStore>) => {
      state.notes?.unshift(payload)
      state.notesCount++
    },

    handleLocalNote: (
      state,
      { payload }: PayloadAction<{ id: string; _id: string }>,
    ) => {
      const noteIndex = state.notes.findIndex(note => note.id === payload.id)

      if (noteIndex === -1) return

      state.notes[noteIndex]._id = payload._id
    },
    setUpdateNote: (state, { payload }: PayloadAction<TNote>) => {
      if (!payload || !payload._id) return

      const { _id } = payload

      const noteIndex = state.notes.findIndex(note => note._id === _id)

      if (noteIndex === -1) return

      state.notes[noteIndex] = { ...state.notes[noteIndex], ...payload }

      state.currentNote = payload
    },

    setCurrentNote: (state, { payload }: PayloadAction<string>) => {
      const note = state.notes?.find(n => n._id === payload)

      if (!note) {
        console.warn(`Note with id ${payload} not found`)
        return
      }

      state.currentNote = note
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
