import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthScreens } from '@/screens/Auth'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TAuthStack } from './types'

const Stack = createNativeStackNavigator<TAuthStack>()

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.AMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen name={EScreens.AMain} component={AuthScreens.Main} />

      <Stack.Screen name={EScreens.ASignIn} component={AuthScreens.SignIn} />

      <Stack.Screen name={EScreens.ASignUp} component={AuthScreens.SignUp} />
    </Stack.Navigator>
  )
}
