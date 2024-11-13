import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Tab as TabComponent } from '@/widgets/tab'

import { EStacks, HomeStack } from '../../stacks'
import { ChatStack } from '../../stacks/Chat'
import { FavoritesStack } from '../../stacks/Favorites'
import { ProfileStack } from '../../stacks/Profile'
import { ScreenTabOptions } from '../options'

import { TMainTab } from './types'

const Tab = createBottomTabNavigator<TMainTab>()

const tabBar = (props: BottomTabBarProps) => {
  return <TabComponent.Standard {...props} />
}

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={EStacks.Home}
      screenOptions={ScreenTabOptions}
      tabBar={tabBar}>
      <Tab.Screen component={HomeStack} name={EStacks.Home} />
    </Tab.Navigator>
  )
}
