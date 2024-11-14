import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { theme } from './config'
import { Navigation } from './ref'
import { MainStack } from './stacks'

export const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.ref} theme={theme}>
      <MainStack />
    </NavigationContainer>
  )
}
