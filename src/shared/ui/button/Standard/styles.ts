import styled, { css } from 'styled-components'

import { EColors, MARGIN } from '@/shared/lib'
import { Touchable, Typography } from '@/shared/ui/styled'

import { TStyledButton, TStyledText } from './types'

export const StyledButton = styled(Touchable).attrs({
  activeOpacity: 0.7,
})<TStyledButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${props => MARGIN(props)}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${EColors.neutral_400};
    `};
`

export const StyledText = styled(Typography.Body1SB)<TStyledText>`
  color: ${({ color }) => color};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${EColors.neutral_300};
    `}
`
