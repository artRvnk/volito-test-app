import { all } from 'redux-saga/effects'

import { noteWatcher } from '@/entities/note'
import { userWatcher } from '@/entities/user'

function* rootSaga() {
  yield all([userWatcher(), noteWatcher()])
}

export default rootSaga
