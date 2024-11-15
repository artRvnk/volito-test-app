import React, { useEffect, useCallback } from 'react'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EScreens, whiteList } from '@/app/navigation'

import { EColors } from '@/shared/lib'
import { useAnimatedTab, useTabs } from '@/shared/lib/hooks/tab'
import { Icon } from '@/shared/ui'

import { Container, ButtonTab, Dot } from './styles'

import type { TOnPressTab, TStacksKeys } from './types'

export const Bottom = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { tabs } = useTabs()
  const { visible, setVisible } = useAnimatedTab()

  const { bottom } = useSafeAreaInsets()

  useEffect(() => {
    const currentRoute = state.routes[state.index]
    const focusedScreen = (getFocusedRouteNameFromRoute(currentRoute) ??
      currentRoute.name.replace('Stack', 'Main')) as EScreens
    setVisible(whiteList.includes(focusedScreen))
  }, [state])

  const onPress = useCallback(
    ({ route, isFocused }: TOnPressTab) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, {
          name: route.name,
          merge: true,
        })
      }
    },
    [navigation],
  )

  const onLongPress = useCallback(
    ({ route, isFocused }: TOnPressTab) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })

      if (isFocused && !event.defaultPrevented) {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        })
      }
    },
    [navigation],
  )

  return (
    <>
      {visible && (
        <Container bottomInst={bottom}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key]

            const isFocused = state.index === index
            const tab = tabs[route.name as TStacksKeys]

            const color = isFocused ? tab.active : tab.inactive
            const colorDot = isFocused ? tab.active : EColors.transparent

            return (
              <ButtonTab
                activeOpacity={1}
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={() => onPress({ ...tab, route, isFocused })}
                onLongPress={() => onLongPress({ ...tab, route, isFocused })}>
                <Icon name={tab.icon} fill={color} />

                <Dot color={colorDot} />
              </ButtonTab>
            )
          })}
        </Container>
      )}
    </>
  )
}
