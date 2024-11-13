import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { useTypedSelector } from '@/app/store'

import { ETab, MainTab } from '../../tabs'
import { AuthStack } from '../Auth'
import { ScreenNavigationOptions } from '../options'
import { EStacks } from '../stacks'

import { TMainStack } from './types'

const Stack = createNativeStackNavigator<TMainStack>()

export const MainStack = () => {
  // const { currentUser } = useTypedSelector(getUserSelector)
  // const isAuthorized = !!currentUser?._id
  const isAuthorized = false

  return (
    <Stack.Navigator
      initialRouteName={ETab.Main}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen
        name={isAuthorized ? ETab.Main : EStacks.Auth}
        component={isAuthorized ? MainTab : AuthStack}
      />
    </Stack.Navigator>
  )
}
