import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { noteActions } from './actions'
import { ActionsTypes } from './constants'

function* logOut() {
  yield put(noteActions.clearState())
}

export function* noteWatcher() {
  yield takeLatest(ActionsTypes.logOut, logOut)
}
