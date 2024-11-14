import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { useTypedSelector } from '@/app/store'

import { useTypedSelector } from '@/app/store'

import { getUserSelector } from '@/entities/user'

import { ETab, MainTab } from '../../tabs'
import { AuthStack } from '../Auth'
import { ScreenNavigationOptions } from '../options'
import { EStacks } from '../stacks'

import { TMainStack } from './types'

const Stack = createNativeStackNavigator<TMainStack>()

export const MainStack = () => {
  const { user } = useTypedSelector(getUserSelector)
  const isAuthorized = !!user

  return (
    <Stack.Navigator
      // initialRouteName={EStacks.Auth}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen
        name={isAuthorized ? ETab.Main : EStacks.Auth}
        component={isAuthorized ? MainTab : AuthStack}
      />

      {/* <Stack.Screen name={EStacks.Auth} component={AuthStack} /> */}
    </Stack.Navigator>
  )
}
