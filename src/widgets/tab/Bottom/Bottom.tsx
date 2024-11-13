import React, { useEffect, useCallback } from 'react'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { EScreens, whiteList } from '@/app/navigation'

import { useAnimatedTab, useTabs } from '@/shared/lib/hooks/tab'
import { Icon } from '@/shared/ui'
import { Typography } from '@/shared/ui/styled'

import { Container, StyledTabButton } from './styles'

import type { TOnPressTab, TStacksKeys } from './types'

export const Bottom = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { tabs } = useTabs()
  const { visible, setVisible } = useAnimatedTab()

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
        <Container>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key]

            const isFocused = state.index === index
            const tab = tabs[route.name as TStacksKeys]

            const color = isFocused ? tab.active : tab.inactive

            // TODO
            return (
              <StyledTabButton
                activeOpacity={1}
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={() => onPress({ ...tab, route, isFocused })}
                onLongPress={() => onLongPress({ ...tab, route, isFocused })}>
                <Icon name={tab.icon} fill={color} />

                <Typography.CaptionR mTop="4px" color={color}>
                  {tab.title}
                </Typography.CaptionR>
              </StyledTabButton>
            )
          })}
        </Container>
      )}
    </>
  )
}
