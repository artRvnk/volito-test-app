import { View } from 'react-native'

import styled from 'styled-components'

import { EColors, FLEX } from '@/shared/lib'

export const Container = styled(View)<{
  bottomInst: number
}>`
  width: 100%;
  background-color: ${EColors.neutral_500};

  padding: 12px 8px
    ${({ bottomInst }) => (bottomInst === 0 ? 16 : bottomInst)}px;
  ${FLEX({ direction: 'row', align: 'center', justify: 'space-between' })}
`
