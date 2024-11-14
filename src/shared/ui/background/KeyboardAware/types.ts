import { ReactNode } from 'react'
import { StatusBarProps } from 'react-native'

import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view'

import { EColors, TMargin } from '@/shared/lib'

export type TKeyboardAwareProps = {
  children?: ReactNode
  pHorizontal?: number
  marginProps?: TMargin
  bgColor?: EColors
  hasBottom?: boolean
  statusBarStyle?: StatusBarProps['barStyle']
} & KeyboardAwareScrollViewProps
