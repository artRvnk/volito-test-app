import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { EColors } from '@/shared/lib'

export type TScrollProps = {
  withTop?: boolean
  withBottom?: boolean
  withBTab?: boolean
  bgColor?: EColors
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  pHorizontal?: number
}
