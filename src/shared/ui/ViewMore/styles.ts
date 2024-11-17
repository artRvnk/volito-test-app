import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { MARGIN, TMargin } from '@/shared/lib'

export const Container = styled(View)<TMargin>`
  ${props => MARGIN(props)}
`

export const Wrapper = styled(View)`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
`

export const styles = StyleSheet.create({
  transparent: {
    opacity: 0,
  },
})
