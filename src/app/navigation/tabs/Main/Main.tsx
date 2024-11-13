import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Tab as TabComponent } from '@/widgets/tab'

import { EStacks, MapStack, NotesStack } from '../../stacks'
import { ScreenTabOptions } from '../options'

import { TMainTab } from './types'

const Tab = createBottomTabNavigator<TMainTab>()

const tabBar = (props: BottomTabBarProps) => {
  return <TabComponent.Bottom {...props} />
}

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={EStacks.Notes}
      screenOptions={ScreenTabOptions}
      tabBar={tabBar}>
      <Tab.Screen component={NotesStack} name={EStacks.Notes} />
      <Tab.Screen component={MapStack} name={EStacks.Map} />
    </Tab.Navigator>
  )
}
