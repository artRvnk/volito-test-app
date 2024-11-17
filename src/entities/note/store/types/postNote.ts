import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { TNote } from '../../models'

export type TPostNoteAction = Omit<TNote, '_id'>

export type TPostNoteRequest =
  FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>

export type TPostNoteStore = TNote
