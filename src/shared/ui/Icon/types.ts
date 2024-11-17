import { StyleProp, ViewStyle } from 'react-native'

import { SvgProps } from 'react-native-svg'

import { TIconsKeys } from '@assets/svg'

import { TMargin } from '@/shared/lib'

export type TIconProps = {
  style?: StyleProp<ViewStyle>
  name: TIconsKeys
  fill?: string
  size?: number
  stroke?: string
  marginProps?: TMargin
  strokeWidth?: number
} & SvgProps
