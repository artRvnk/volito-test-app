import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { TNote } from '../../models'

export type TUpdateNoteAction = TNote

export type TUpdateNoteRequest =
  FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>

export type TUpdateNoteStore = TNote
