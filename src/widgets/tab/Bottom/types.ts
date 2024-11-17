import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { TIconsKeys } from '@assets/Svg'

import { EStacks } from '@/app/navigation'

import { EColors } from '@/shared/lib'

export type TStacksKeys = EStacks.Notes | EStacks.Map

export type TUseTabs = {
  icon: TIconsKeys
  active: EColors
  inactive: EColors
}

export type TOnPressTab = {
  isFocused: boolean
  route: BottomTabBarProps['state']['routes'][0]
}
