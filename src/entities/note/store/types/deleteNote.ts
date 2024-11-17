import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type TDeleteNoteAction = string

export type TDeleteNoteRequest =
  FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>
