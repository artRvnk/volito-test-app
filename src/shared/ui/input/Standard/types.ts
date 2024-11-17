import { FC } from 'react'
import { StyleProp, TextInputProps, ViewStyle } from 'react-native'

import { SvgProps } from 'react-native-svg'

import { TMargin } from '@/shared/lib'

export type TStandardProps = {
  label?: string
  style?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  placeholder?: string
  error?: string
  value?: string
  LeftIcon?: FC<SvgProps>
  RightIcon?: FC<SvgProps>
  onChange?: (text: string) => void
  onPress?: () => void
  onPressRightIcon?: () => void
  notRequired?: boolean
  leftIconProps?: FC<SvgProps>
  rightIconProps?: FC<SvgProps>
  withSwitch?: boolean
  keyboardType?: TextInputProps['keyboardType']
  disabled?: boolean
  multiline?: boolean
  autoFocus?: boolean
  mask?: Array<string | RegExp>
  inputStyle?: TextInputProps['style']
  onSubmitEditing?: () => void
  autoComplete?: TextInputProps['autoComplete']
  width?: string
} & Partial<TContainer> &
  Pick<Partial<TStyledInputContainer>, 'height'>

export type TContainer = {
  disabled: boolean
  widthVal: string
} & TMargin

export type TStyledInputContainer = {
  height: string
  hasError: boolean
  disabled: boolean
}

export type TStyledInput = {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}
