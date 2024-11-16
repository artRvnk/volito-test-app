import { StyleProp, TextInputProps, TextStyle } from 'react-native'

import { TMargin } from '@/shared/lib'

export type TTextAreaProps = {
  value?: string
  onChange?: (text: string) => void
  label?: string
  error?: string
  disabled?: boolean
  style?: StyleProp<TextStyle>
  maxCharacters?: number
} & TMargin &
  Omit<TextInputProps, 'error'>
