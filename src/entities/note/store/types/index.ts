import { TNote } from '../../models'

export * from './getNotes'
export * from './getNotesCount'
export * from './deleteNote'
export * from './postNote'
export * from './updateNote'

export type TInitialState = {
  notes: TNote[]
  notesCount: number

  currentNote: TNote | null

  loading: boolean
}
