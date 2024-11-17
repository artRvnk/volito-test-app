import firestore from '@react-native-firebase/firestore'

import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { ECollection, STEP } from '@/shared/lib'

import { TNote } from '../models'

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

    const notes = response.docs.map(snapshot => {
      const data = snapshot.data()

      return {
        ...(data as TNote),
        _id: snapshot.id,
      }
    })

    if (skip > STEP) {
      yield put(noteActions.setMoreNotes(notes))
    } else {
      yield put(noteActions.setNotes(notes))
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

    yield put(noteActions.setNotesCount(response.data().count))
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

    yield put(noteActions.setDeleteNote(payload))
  } catch (e) {
    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

function* postNote({ payload }: PayloadAction<Types.TPostNoteAction>) {
  yield put(noteActions.setState({ loading: true }))

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

    yield put(
      noteActions.handleLocalNote({
        id: payload.id,
        _id: response?.id,
      }),
    )
  } catch (e) {
    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

function* updateNote({ payload }: PayloadAction<Types.TUpdateNoteAction>) {
  yield put(noteActions.setState({ loading: true }))

  try {
    const response: Types.TUpdateNoteRequest = yield call(() =>
      firestore()
        .collection(ECollection.notes)
        .doc(payload._id)
        .update(payload),
    )

    yield put(noteActions.setUpdateNote(payload))
  } catch (e) {
    captureException(e)
  }

  yield put(noteActions.setState({ loading: false }))
}

export function* noteWatcher() {
  yield takeLatest(ActionsTypes.getNotes, getNotes)
  yield takeLatest(ActionsTypes.getNotesCount, getNotesCount)

  yield takeEvery(ActionsTypes.deleteNote, deleteNote)
  yield takeEvery(ActionsTypes.postNote, postNote)
  yield takeEvery(ActionsTypes.updateNote, updateNote)
}
