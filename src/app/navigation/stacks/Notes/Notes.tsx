import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NotesScreens } from '@/screens/Notes'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TNotesStack } from './types'

const Stack = createNativeStackNavigator<TNotesStack>()

export const NotesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.NMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen name={EScreens.NMain} component={NotesScreens.Main} />

      <Stack.Screen name={EScreens.NCreate} component={NotesScreens.Create} />

      <Stack.Screen name={EScreens.NSingle} component={NotesScreens.Single} />

      <Stack.Screen name={EScreens.NEdit} component={NotesScreens.Edit} />
    </Stack.Navigator>
  )
}
