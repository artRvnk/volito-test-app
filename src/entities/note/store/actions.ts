import { createAction } from '@reduxjs/toolkit'

import { ActionsTypes } from './constants'
import { sliceActions } from './reducer'

import type * as Types from './types'

export const noteActions = {
  ...sliceActions,

  getNotes: createAction<Types.TGetNotesAction>(ActionsTypes.getNotes),
  getNotesCount: createAction(ActionsTypes.getNotesCount),

  postNote: createAction<Types.TPostNoteAction>(ActionsTypes.postNote),

  updateNote: createAction<Types.TUpdateNoteAction>(ActionsTypes.updateNote),

  deleteNote: createAction<Types.TDeleteNoteAction>(ActionsTypes.deleteNote),
}
