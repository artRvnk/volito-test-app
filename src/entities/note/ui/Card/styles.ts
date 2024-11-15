import { View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Container = styled(View)`
  height: 108px;
  /* height: 208px; */
  width: 100%;
  background-color: ${EColors.neutral_400};
  padding: 0px 16px;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 16px;
  overflow: hidden;
`
