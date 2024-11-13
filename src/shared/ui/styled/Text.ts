import { Text } from 'react-native'

import styled, { css } from 'styled-components'

import { EColors, EFonts, FONT, MARGIN } from '@/shared/lib'

import { TStyledTextProps } from './types'

export const StyledText = styled(Text)<TStyledTextProps>`
  ${FONT({})}
  ${props => css`
    ${MARGIN(props)}

    ${props.size &&
    css`
      font-size: ${props.size};
    `}

    color: ${props.color || EColors.white};

    text-align: ${props.align || 'auto'};
  `}
`

export const H1 = styled(StyledText)`
  font-size: 28px;
  font-weight: 600;
  font-family: ${EFonts.bold};
`

export const H2 = styled(StyledText)`
  font-size: 24px;
  font-weight: 600;
  font-family: ${EFonts.bold};
`

export const H3 = styled(StyledText)`
  font-size: 18px;
  font-weight: 600;
  font-family: ${EFonts.bold};
`

const Body1 = styled(StyledText)`
  font-size: 16px;
  line-height: 24px;
`
export const Body1R = styled(Body1)`
  font-weight: 400;
  font-family: ${EFonts.regular};
`
export const Body1SB = styled(Body1)`
  font-weight: 600;
  font-family: ${EFonts.bold};
`

export const Body2 = styled(StyledText)`
  font-size: 14px;
  line-height: 20px;
`
export const Body2R = styled(Body2)`
  font-weight: 400;
  font-family: ${EFonts.regular};
`
export const Body2SB = styled(Body2)`
  font-weight: 600;
  font-family: ${EFonts.bold};
`

const Caption = styled(StyledText)`
  font-size: 12px;
  line-height: 16px;
`
export const CaptionR = styled(Caption)`
  font-weight: 400;
  font-family: ${EFonts.regular};
`
export const CaptionSB = styled(Caption)`
  font-weight: 600;
  font-family: ${EFonts.bold};
`
