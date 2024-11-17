/* eslint-disable no-nested-ternary */
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors, MARGIN, TMargin } from '@/shared/lib'
import { isIos } from '@/shared/tools'

import { TSize } from './types'

const getSize = (size?: TSize) => {
  if (size === 'large') return 60
  if (isIos) return 52
  return 56
}

export const getStyles = ({
  error,
  size,
  multiline,
  lineHeight,
  disabled,
}: {
  error?: string
  size?: TSize
  multiline?: boolean
  lineHeight?: number
  disabled?: boolean
}) => {
  return StyleSheet.create({
    input: {
      fontSize: 16,
      color: EColors.white,
      paddingTop: isIos ? (multiline ? 20 : 10) : 20,
      paddingBottom: multiline ? 10 : 0,
    },
    container: {
      borderWidth: 1,
      borderRadius: 16,
      paddingHorizontal: 16,
      borderColor: !!error ? EColors.primary_500 : EColors.neutral_400,
      backgroundColor: EColors.neutral_400,

      ...(multiline &&
        lineHeight && {
          minHeight: 60,
        }),
      ...(!multiline && { height: getSize(size) }),

      ...(disabled && {
        opacity: 0.7,
      }),
    },
    labelStyles: {
      width: '85%',
    },
  })
}

export const Button = styled(TouchableOpacity)<{
  size?: TSize
}>`
  width: 100%;
`

export const CIcon = styled(View)<TMargin>`
  justify-content: center;
  align-items: center;
  ${prop => MARGIN(prop)}
`

export const TouchIcon = styled(TouchableOpacity)``

export const CCounter = styled(View)`
  margin-left: auto;
`
