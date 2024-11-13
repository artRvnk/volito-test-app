import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

// TODO - useAuth
// import { useAuth } from '@/entities/user'

import { theme } from './config'
import { Navigation } from './ref'
import { MainStack } from './stacks'

export const Navigator = () => {
  // useAuth()

  return (
    <NavigationContainer ref={Navigation.ref} theme={theme}>
      <MainStack />
    </NavigationContainer>
  )
}
