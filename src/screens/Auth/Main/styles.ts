import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import { EColors } from '@/shared/lib'
import { HP, WP } from '@/shared/tools'

export const Container = styled.View`
  padding: 0px 16px;
`

export const BottomLinks = styled.View<{ bottom?: number }>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom + 5 : 0)}px;
  padding: 0px 16px;
`

export const styles = StyleSheet.create({
  background: {
    backgroundColor: EColors.primary_400,
  },
  link_wrapper: {
    justifyContent: 'flex-end',
  },
  link: {},
  image: {
    width: WP(100),
    maxHeight: HP(35),
    marginBottom: 16,
  },
})
