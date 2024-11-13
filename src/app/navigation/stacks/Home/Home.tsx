import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreens } from '@/screens/Home'
import { ProfileScreens } from '@/screens/Profile'

import { EColors } from '@/shared/ui/styled'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'
import { ProfileStack } from '../Profile'

import { THomeStack } from './types'

const Stack = createStackNavigator<THomeStack>()

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.HMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}>
      <Stack.Screen component={HomeScreens.Main} name={EScreens.HMain} />
      <Stack.Screen component={HomeScreens.Search} name={EScreens.HSearch} />
      <Stack.Screen component={ProfileStack} name={EScreens.HProfile} />
      <Stack.Screen component={HomeScreens.Filters} name={EScreens.HFilters} />
      <Stack.Screen
        component={HomeScreens.FiltersResult}
        name={EScreens.HFiltersResult}
      />

      <Stack.Screen
        component={ProfileScreens.Gallery}
        name={EScreens.PGallery}
      />
    </Stack.Navigator>
  )
}
