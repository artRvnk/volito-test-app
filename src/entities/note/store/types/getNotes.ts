import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type TGetNotesAction = { skip: number }

export type TGetNotesRequest =
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>

export type TGetNotesStore =
  FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
