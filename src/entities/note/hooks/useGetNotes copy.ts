import { useState } from 'react'

import firestore, {
  deleteDoc,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

import { captureException } from '@sentry/react-native'

import { ECollection, usePagination } from '@/shared/lib'

import { TNote } from '../models'

export const useGetNotes = () => {
  const [notes, setNotes] = useState<TNote[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(false)

  const getNotes = async () => {
    setLoading(true)

    try {
      const response: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData> =
        await firestore().collection(ECollection.notes).get()
      const array = response?.docs

      const notesArray = array.map(snapshot => {
        const data = snapshot.data()

        return {
          ...(data as TNote),
          key: snapshot.id,
        }
      })
      // setNotes(notesArray)
      setNotes([])

      const responseCount: FirebaseFirestoreTypes.AggregateQuerySnapshot<{
        count: FirebaseFirestoreTypes.AggregateField<number>
      }> = await firestore().collection(ECollection.notes).count().get()

      // setTotalCount(responseCount.data().count)
      setTotalCount(0)
    } catch (e) {
      captureException(e)
    }

    setLoading(false)
  }

  const paginationProps = usePagination({
    getAction: getNotes,
    loading: isLoading,
    items: notes,
    totalCount,
  })

  return {
    data: notes,
    totalCount,
    ...paginationProps,
  }
}
