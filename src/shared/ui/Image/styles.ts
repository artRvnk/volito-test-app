import { StyleSheet } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

import { WP } from '@/shared/tools'

import { Touchable } from '../styled'

export const Button = styled(Touchable)<{ size: number }>`
  bottom: -12px;
  right: -12px;
  position: absolute;
  padding: 8px;
  border-width: 3px;
  border-radius: 100px;
  background-color: ${EColors.primary_400};
  border-color: ${EColors.neutral_400};
`

export const getStyles = (size: number) =>
  StyleSheet.create({
    image: {
      width: WP(90),
      height: size,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    view: {
      borderRadius: 24,
      backgroundColor: EColors.neutral_400,
    },
  })
