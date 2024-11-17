import { put, takeLatest } from 'redux-saga/effects'

import { noteActions } from '@/entities/note'

import { FirebaseService } from '../services'

import { userActions } from './actions'
import { ActionsTypes } from './constants'

function* logOut() {
  yield put(userActions.clearState())
  yield put(noteActions.clearState())

  yield FirebaseService.signOut()
}

export function* userWatcher() {
  yield takeLatest(ActionsTypes.logOut, logOut)
}
