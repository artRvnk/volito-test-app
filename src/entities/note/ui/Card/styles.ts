import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Container = styled(View)`
  width: 100%;
  background-color: ${EColors.neutral_400};
  padding: 12px;
  justify-content: center;
`

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  text: {
    width: '70%',
  },
  textWide: { maxWidth: '65%' },
  textTight: { maxWidth: '30%' },
  textStandard: { maxWidth: '50%' },
})
