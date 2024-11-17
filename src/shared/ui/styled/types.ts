import { FlexStyle, TextStyle } from 'react-native'

import { EColors, TMargin } from '@/shared/lib'

export type TStyledTextProps = {
  size?: string
  color?: EColors
  align?: TextStyle['textAlign']
} & TMargin

export type TFlexWrapper = {
  width?: string
  height?: string
  flexDirection?: FlexStyle['flexDirection']
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: FlexStyle['flexWrap']
} & TMargin

export type THrProps = TMargin & {
  color?: EColors
  vertical?: boolean
}

export type TDividerProps = {
  width?: number
  height?: number
  background?: string
}

export type TRowProps = {
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
} & TMargin
