import { TextInput, View } from 'react-native'

import styled from 'styled-components'

import { EColors, EFonts } from '@/shared/lib'

export const Input = styled(TextInput)<{ hasError?: boolean }>`
  width: 100%;
  height: 98px;
  border-radius: 8px;
  border-width: 1px;
  color: ${EColors.black};
  border-color: ${({ hasError }) =>
    hasError ? EColors.red_500 : EColors.neutral_400};
  background-color: ${EColors.neutral_400};
  color: ${EColors.white};
  font-family: ${EFonts.regular};
  font-size: 16px;
  padding: 8px 12px;
`

export const CCounter = styled(View)`
  margin-left: auto;
`
