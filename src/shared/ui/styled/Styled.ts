import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import styled, { css } from 'styled-components'

import { EColors, MARGIN, TMargin } from '@/shared/lib'

import { TDividerProps, TFlexWrapper, THrProps, TRowProps } from './types'

export const FlexWrapper = styled(View)<TFlexWrapper>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  max-width: 100%;

  background-color: transparent;

  ${props => MARGIN(props)}
`

export const Hr = styled(View)<THrProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color || EColors.neutral_200};

  ${({ vertical }) =>
    vertical &&
    css`
      width: 1px;
      height: 100%;
    `}

  ${props => MARGIN(props)}
`

export const Divider = styled(View)<TDividerProps>(
  ({ width, height, background }) => `
  width: ${width || 0}px;
  height: ${height || 0}px;
  background-color: ${background || 'transparent'};
`,
)

export const Touchable = styled(TouchableOpacity).attrs<
  TouchableOpacityProps & TMargin
>(props => ({
  activeOpacity: props.activeOpacity || 0.8,
  ...props,
}))<TMargin>`
  ${props => MARGIN(props)}
`

export const Row = styled(View)<TRowProps>`
  flex-direction: row;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify};

  ${props => MARGIN(props)}
`
