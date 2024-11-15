import { TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'

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
`

export const ButtonTab = styled(TouchableOpacity)`
  align-items: center;
  width: ${WP(30)}px;
`

export const Dot = styled(View)<{ color: EColors }>`
  border-radius: 50px;
  height: 4px;
  width: 4px;
  margin-top: 6px;
  background-color: ${({ color }) => color};
`
