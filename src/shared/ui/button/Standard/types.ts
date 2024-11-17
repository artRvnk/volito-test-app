import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { TIconsKeys } from '@assets/Svg'

import { EColors, TMargin } from '@/shared/lib'

import { TIconProps } from '../../Icon'

export type TStandard = {
  onPress?: () => void
  children?: ReactNode
  text?: string
  textColor?: EColors
  style?: StyleProp<ViewStyle>
  icon?: TIconsKeys
  iconProps?: Omit<TIconProps, 'name'>
} & Partial<TStyledButton>

export type TStyledButton = {
  width: string
  height: string
  color: EColors
  disabled: boolean
  hideBorder: boolean
  radius: number
} & TMargin

export type TStyledText = {
  disabled: boolean
  color: EColors
}
