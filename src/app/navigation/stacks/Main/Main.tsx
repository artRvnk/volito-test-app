import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { useTypedSelector } from '@/app/store'

import { getUserSelector } from '@/entities/user'

import { EColors } from '@/shared/ui/styled'

import { ETab, MainTab } from '../../tabs'
import { AuthMainStack } from '../Auth'
import { ScreenNavigationOptions } from '../options'
import { EStacks } from '../stacks'

import { TMainStack } from './types'

const Stack = createStackNavigator<TMainStack>()

export const MainStack = () => {
  const { currentUser } = useTypedSelector(getUserSelector)
  const isAuthorized = !!currentUser?._id

  return (
    <Stack.Navigator
      initialRouteName={ETab.Main}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen
        name={isAuthorized ? ETab.Main : EStacks.AuthMain}
        component={isAuthorized ? MainTab : AuthMainStack}
      />
    </Stack.Navigator>
  )
}
