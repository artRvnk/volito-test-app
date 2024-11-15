import firestore, {
  deleteDoc,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { ECollection, STEP } from '@/shared/lib'

import { TNote } from '../models'

import { noteActions } from './actions'
import { ActionsTypes } from './constants'

import type * as Types from './types'

function* getNotes({ payload }: PayloadAction<Types.TGetNotesAction>) {
  yield put(noteActions.setState({ loading: true }))

  console.log('getNotes-d-skip', payload.skip)

  try {
    const response: Types.TGetNotesRequest = yield call(() =>
      firestore()
        .collection(ECollection.notes)
        .orderBy('createdAt')
        .limit(5)
        .limitToLast(payload.skip)
        .get(),
    )
    console.log('getNotes-response', response.docs)

    if (payload.skip > STEP) {
      console.log('getNotes-d-setMoreNotes')
      yield put(noteActions.setMoreNotes(response.docs))
    } else {
      console.log('getNotes-d-setNotes')
      yield put(noteActions.setNotes(response.docs))
    }
  } catch (e) {
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

export function* noteWatcher() {
  yield takeLatest(ActionsTypes.getNotes, getNotes)
  yield takeLatest(ActionsTypes.getNotesCount, getNotesCount)

  yield takeEvery(ActionsTypes.deleteNote, deleteNote)
}
