import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const HeaderContainer = styled(View)<{
  height: number
  autoHeight: boolean
  backgroundColor?: EColors
}>`
  padding-top: ${({ autoHeight }) => (autoHeight ? 8 : 0)}px;
  height: ${({ height, autoHeight }) => (autoHeight ? 'auto' : `${height}px`)};
  justify-content: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || EColors.neutral_500};
`

export const BarHeight = styled(View).attrs({
  pointerEvents: 'none',
})<{ height: number }>`
  height: ${({ height }) => height}px;
`

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: EColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
