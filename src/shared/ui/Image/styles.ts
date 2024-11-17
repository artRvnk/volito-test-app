import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

import { WP } from '@/shared/tools'

import { Touchable } from '../styled'

export const Container = styled(View)`
  background-color: ${EColors.white};
  padding: 24px 0px;
  align-items: center;
  justify-content: center;
`

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
      // width: size,
      // width: '100%',
      width: WP(90),
      height: size,
      borderRadius: 24,
    },
    view: {
      borderRadius: 24,
      backgroundColor: EColors.neutral_400,
    },
  })
