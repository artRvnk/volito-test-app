import { View, StyleSheet } from 'react-native'

import styled from 'styled-components'

import { EColors, TMargin, MARGIN } from '@/shared/lib'

export const getStyles = (props: { pHorizontal: number; bgColor: EColors }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: props.pHorizontal,
      backgroundColor: props.bgColor,
    },
    content: {
      flexGrow: 1,
    },
  })

export const Container = styled(View)<TMargin>`
  flex: 1;
  ${props => MARGIN(props)}
`
