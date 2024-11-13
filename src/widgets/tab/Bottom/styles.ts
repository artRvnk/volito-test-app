import { StyleSheet, TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'

export const styles = StyleSheet.create({
  shadow: {
    width: '100%',
  },
})

export const Container = styled(View)`
  flex-direction: row;
  padding-top: 11px;
  padding-bottom: 8px;

  background-color: ${EColors.black};
  width: ${WP(100) - 16}px;
  left: 8px;
  border-radius: 80px;
  height: 64px;
  position: absolute;
  bottom: 10px;
  align-items: center;
`

export const StyledTabButton = styled(TouchableOpacity)`
  flex: 1;
`
