import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type TGetNotesCountAction = undefined

export type TGetNotesCountRequest =
  FirebaseFirestoreTypes.AggregateQuerySnapshot<{
    count: FirebaseFirestoreTypes.AggregateField<number>
  }>

export type TGetNotesCountStore = number
