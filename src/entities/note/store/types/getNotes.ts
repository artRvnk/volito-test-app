import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { TNote } from '../../models'

export type TGetNotesAction = { owner: string; skip: number }

export type TGetNotesRequest =
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>

export type TGetNotesStore = TNote[]
