import { ReactNode } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

export type TBottomBarProps = {
  containerStyle?: StyleProp<ViewStyle>
  children?: ReactNode
  getHeight?: (value: number) => void
}
