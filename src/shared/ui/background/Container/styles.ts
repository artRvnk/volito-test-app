import { View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Container = styled(View)<{ color: EColors }>`
  background-color: ${({ color }) => color};
  flex: 1;
`
