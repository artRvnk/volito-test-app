import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { userActions } from './actions'
import { ActionsTypes } from './constants'

function* logOut() {
  // console.log('logOut-logOutWorker')
  yield put(userActions.clearState())
  // yield TokenService.clearTokens()
}

export function* userWatcher() {
  yield takeLatest(ActionsTypes.logOut, logOut)
}
