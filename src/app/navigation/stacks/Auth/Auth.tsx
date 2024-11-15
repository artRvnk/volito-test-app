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
      initialRouteName={EScreens.AuthMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen name={EScreens.AuthMain} component={AuthScreens.Main} />

      <Stack.Screen name={EScreens.AuthSignUp} component={AuthScreens.SignUp} />

      <Stack.Screen name={EScreens.AuthPhone} component={AuthScreens.Phone} />

      <Stack.Screen name={EScreens.AuthOtp} component={AuthScreens.Otp} />
    </Stack.Navigator>
  )
}
