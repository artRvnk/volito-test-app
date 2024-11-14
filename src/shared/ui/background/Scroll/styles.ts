import { ScrollView } from 'react-native'

import styled from 'styled-components'

export const Scroll = styled(ScrollView).attrs({
  bounces: false,
  nestedScrollEnabled: true,
  showsVerticalScrollIndicator: false,
})<{ color: string }>`
  background-color: ${({ color }) => color};
`
