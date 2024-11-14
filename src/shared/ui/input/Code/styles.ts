import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Ceil = styled(View)<{
  isError?: boolean
}>`
  width: 53px;
  height: 53px;
  background-color: ${EColors.neutral_400};

  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
})
