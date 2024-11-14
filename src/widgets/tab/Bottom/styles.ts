import { StyleSheet, TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'

export const styles = StyleSheet.create({
  shadow: {
    width: '100%',
  },
})

export const Container = styled(View)<{
  bottomInst: number
}>`
  flex-direction: row;
  justify-content: space-around;

  padding-top: 11px;
  padding-bottom: 8px;

  background-color: ${EColors.black};
  width: ${WP(100) - 16}px;
  left: 8px;
  border-radius: 80px;
  height: 64px;
  position: absolute;
  align-items: center;
  bottom: ${({ bottomInst }) => (bottomInst === 0 ? 16 : bottomInst * 0.67)}px;
  /* bottom: 16px; */
`

export const StyledTabButton = styled(TouchableOpacity)`
  align-items: center;
  /* width: 75px; */
  width: ${WP(30)}px;
  /* flex: 1; */
  /* background-color: red; */
`
