import { StyleSheet, View, Platform, TextInput } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import MaskInput from 'react-native-mask-input'
import styled, { css } from 'styled-components'

import { EColors, FONT, MARGIN } from '@/shared/lib'

import { TContainer, TStyledInput, TStyledInputContainer } from './types'

export const Container = styled(View)<TContainer>`
  width: ${({ widthVal }) => widthVal};
  align-items: flex-start;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}

  ${props => MARGIN(props)}
`

//prettier-ignore
export const StyledTextInputContainer = styled(TouchableOpacity)<TStyledInputContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
   
  border-radius: 16px;
  background-color: ${EColors.neutral_400};

  ${FONT({})}
  padding:0px 12px;


  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${EColors.primary_400};
    `} 
`

export const StyledTextInput = styled(MaskInput)<TStyledInput>`
  margin-left: ${({ hasLeftIcon }) => (hasLeftIcon ? '7px' : '0px')};
  color: ${EColors.white};
  ${FONT({})};
  ${Platform.select({
    android: { top: 3 },
  })}
`

export const InputContainer = styled(View)`
  flex: 1;
`

export const styles = StyleSheet.create({
  padding: {
    padding: 5,
  },
  input: { color: EColors.white },
})
