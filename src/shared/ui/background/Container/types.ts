import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { EColors } from '@/shared/lib'

export type TContainerProps = {
  withTop?: boolean
  withBottom?: boolean
  bgColor?: EColors
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  pHorizontal?: number
}
