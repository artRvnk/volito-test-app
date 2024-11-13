import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MapScreens } from '@/screens/Map'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TMapStack } from './types'

const Stack = createNativeStackNavigator<TMapStack>()

export const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.MMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen name={EScreens.MMain} component={MapScreens.Main} />
    </Stack.Navigator>
  )
}
