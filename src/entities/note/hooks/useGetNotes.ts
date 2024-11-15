import { useCallback, useState } from 'react'

import firestore, {
  deleteDoc,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

import { captureException } from '@sentry/react-native'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { ECollection, usePagination } from '@/shared/lib'

import { TNote } from '../models'
import { getNoteSelector, noteActions } from '../store'

export const useGetNotes = () => {
  const dispatch = useDispatch()

  // const [notes, setNotes] = useState<TNote[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(false)

  const [page, setPage] = useState(5)

  const { loading, notes, notesCount } = useTypedSelector(getNoteSelector)

  const getNotes = useCallback<(skip: number) => void>(skip => {
    // if (notes.length + 1 < notesCount) {
    dispatch(
      noteActions.getNotes({
        // skip: page + 5,
        skip,
      }),
    )
    // setPage(page + 5)
    // }

    dispatch(noteActions.getNotesCount())
  }, [])

  // const getNotes = async () => {
  //   setLoading(true)

  //   try {
  //     const response: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData> =
  //       await firestore().collection(ECollection.notes).get()
  //     const array = response?.docs

  //     const notesArray = array.map(snapshot => {
  //       const data = snapshot.data()

  //       return {
  //         ...(data as TNote),
  //         key: snapshot.id,
  //       }
  //     })
  //     // setNotes(notesArray)
  //     setNotes([])

  //     const responseCount: FirebaseFirestoreTypes.AggregateQuerySnapshot<{
  //       count: FirebaseFirestoreTypes.AggregateField<number>
  //     }> = await firestore().collection(ECollection.notes).count().get()

  //     // setTotalCount(responseCount.data().count)
  //     setTotalCount(0)
  //   } catch (e) {
  //     captureException(e)
  //   }

  //   setLoading(false)
  // }

  const paginationProps = usePagination({
    getAction: getNotes,
    loading,
    items: notes,
    totalCount: notesCount,
  })

  return {
    data: notes,
    totalCount: notesCount,
    ...paginationProps,
  }
}
