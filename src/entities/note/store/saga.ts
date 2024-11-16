import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import Geolocation from 'react-native-geolocation-service'
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'

import { EStoreReducer, useTypedSelector } from '@/app/store'

import { getUserSelector, TUser } from '@/entities/user'

import { ECollection, STEP } from '@/shared/lib'

import { noteActions } from './actions'
import { ActionsTypes } from './constants'

import type * as Types from './types'

function* getNotes({ payload }: PayloadAction<Types.TGetNotesAction>) {
  yield put(noteActions.setState({ loading: true }))

  const { owner, skip } = payload

  try {
    const response: Types.TGetNotesRequest = yield call(() =>
      firestore()
        .collection(ECollection.notes)
        .where('owner', '==', owner)
        .orderBy('createdAt', 'desc')
        .limit(STEP)
        .limitToLast(skip)
        .get(),
    )
    console.log('getNotes-response', response)

    if (skip > STEP) {
      yield put(noteActions.setMoreNotes(response.docs))
    } else {
      yield put(noteActions.setNotes(response.docs))
    }
  } catch (e) {
    console.log('getNotes-e', e)

    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

function* getNotesCount({
  payload,
}: PayloadAction<Types.TGetNotesCountAction>) {
  yield put(noteActions.setState({ loading: true }))

  try {
    const response: Types.TGetNotesCountRequest = yield call(() =>
      firestore().collection(ECollection.notes).count().get(),
    )
    // console.log('getNotesCount-response', response)

    yield put(noteActions.setNotesCount(response.data().count))

    // yield put(noteActions.setNotes(response.docs))
  } catch (e) {
    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

function* deleteNote({ payload }: PayloadAction<Types.TDeleteNoteAction>) {
  yield put(noteActions.setState({ loading: true }))

  try {
    const response: Types.TDeleteNoteRequest = yield call(() =>
      firestore().collection(ECollection.notes).doc(payload).delete(),
    )
    console.log('deleteNote-response', response)

    yield put(noteActions.setDeleteNote(payload))
  } catch (e) {
    console.log('deleteNote-e', e)

    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

// const selectLocation = useTypedSelector(getUserSelector)

function* postNote({ payload }: PayloadAction<Types.TPostNoteAction>) {
  yield put(noteActions.setState({ loading: true }))

  console.log('postNote-payload', payload)

  yield put(
    noteActions.setLocalNote({
      _id: '',
      ...payload,
    }),
  )

  try {
    const response: Types.TPostNoteRequest = yield call(() =>
      firestore().collection(ECollection.notes).add(payload),
    )
    console.log('postNote-response', response)
    console.log('postNote-documentPath', response?.id)

    yield put(
      noteActions.handleLocalNote({
        id: payload.id,
        _id: response?.id,
      }),
    )
  } catch (e) {
    console.log('postNote-e', e)

    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

export function* noteWatcher() {
  yield takeLatest(ActionsTypes.getNotes, getNotes)
  yield takeLatest(ActionsTypes.getNotesCount, getNotesCount)

  yield takeEvery(ActionsTypes.deleteNote, deleteNote)
  yield takeEvery(ActionsTypes.postNote, postNote)
}
