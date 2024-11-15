import { TNote } from '../../models'

export * from './getNotes'
export * from './getNotesCount'
export * from './deleteNote'

export type TInitialState = {
  notes: TNote[]
  notesCount: number

  loading: boolean
}
