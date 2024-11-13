import React, { useEffect } from 'react'
import { StatusBar, Text, View } from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import { Sentry } from '@/shared/lib/sentry'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)
  }, [])

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Test Message</Text>
      </View>

      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Context>
            <Navigator />
          </Context>
        </PersistGate>
      </Provider> */}
    </>
  )
}

export default Sentry.wrap(App)
