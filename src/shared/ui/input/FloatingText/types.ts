import { FloatingLabelInput } from 'react-native-floating-label-input'

import { TIconsKeys } from '@assets/Svg'

import { TMargin } from '@/shared/lib'

import { TIconProps } from '../../Icon'

export type TFloatingTextProps = {
  value?: string
  onChange?: (text: string) => void
  label?: string
  onPress?: () => void
  inputProps?: Partial<typeof FloatingLabelInput.defaultProps>

  icon?: TIconsKeys
  LeftIcon?: TIconsKeys
  iconProps?: Omit<TIconProps, 'name' | 'fill'>
  onPressIcon?: () => void

  error?: string
  disabled?: boolean

  size?: TSize
  multiline?: boolean
  maxCharacters?: number
} & TMargin

export type TSize = 'large' | 'medium'

export type TRenderIcon = {
  iconName?: TIconsKeys
  pressIcon?: () => void
}
