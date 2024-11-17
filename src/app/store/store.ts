import { REDUX_KEY } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './saga'
import { EStoreReducer } from './types'

const whitelist: string[] = [EStoreReducer.user]

const persistedReducer = persistReducer(
  {
    key: REDUX_KEY,
    storage: AsyncStorage,
    whitelist,
  },
  rootReducer,
)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        // Ignore non-serializable values for the `persist/PERSIST` action type
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(middlewares),
  devTools: true,
})

export const persistor = persistStore(store)

// Run saga
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch

export default store
