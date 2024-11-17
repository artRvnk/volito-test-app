import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { EColors } from '@/shared/lib'

import { Typography } from '../../styled'

import {
  styles,
  Container,
  InputContainer,
  StyledTextInput,
  StyledTextInputContainer,
} from './styles'

import type { TStandardProps } from './types'

const NEUTRAL_COLOR = EColors.neutral_200

export const Standard = ({
  label = '',
  width = '100%',
  height = '60px',
  value = '',
  style,
  notRequired,
  placeholder,
  error,
  RightIcon,
  LeftIcon,
  leftIconProps,
  rightIconProps,
  onChange,
  onPressRightIcon,
  disabled = false,
  onPress,
  keyboardType = 'default',
  multiline = false,
  inputContainerStyle = {},
  autoFocus = false,
  onSubmitEditing = () => {},
  autoComplete,
  mask,
  inputStyle,
  ...props
}: TStandardProps) => {
  const [inputValue, setInputValue] = useState<string>(value)

  const { t, keys } = useTranslation()

  const onValueChange = (changeValue: string) => {
    onChange && onChange(changeValue)
    setInputValue(changeValue)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <Container disabled={disabled} style={style} widthVal={width} {...props}>
      {label && (
        <Typography.Body2SB mLeft={'10px'} mBottom={'12px'}>
          {label}

          <Typography.Body2SB color={EColors.primary_400}>
            {!notRequired && '*'}
          </Typography.Body2SB>
        </Typography.Body2SB>
      )}

      <StyledTextInputContainer
        disabled={disabled}
        onPress={onPress}
        height={height}
        activeOpacity={1}
        style={inputContainerStyle}
        hasError={!!error}>
        {!!LeftIcon && <LeftIcon fill={NEUTRAL_COLOR} {...leftIconProps} />}

        <InputContainer>
          <StyledTextInput
            textAlignVertical={multiline ? 'top' : 'center'}
            style={[inputStyle, styles.input]}
            mask={mask}
            placeholder={placeholder}
            placeholderTextColor={NEUTRAL_COLOR}
            selectionColor={EColors.primary_300}
            value={inputValue}
            editable={!disabled}
            hasLeftIcon={!!LeftIcon}
            hasRightIcon={!!RightIcon}
            onChangeText={onValueChange}
            keyboardType={keyboardType}
            multiline={multiline}
            onSubmitEditing={onSubmitEditing}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            keyboardAppearance="dark"
          />
        </InputContainer>

        {!!RightIcon && (
          <TouchableOpacity style={styles.padding} onPress={onPressRightIcon}>
            <RightIcon fill={NEUTRAL_COLOR} {...rightIconProps} />
          </TouchableOpacity>
        )}
      </StyledTextInputContainer>

      {error && (
        <Typography.Body2R
          mTop={'10px'}
          mLeft={'8px'}
          mBottom={'10px'}
          color={EColors.primary_400}>
          {t(error as keyof typeof keys)}
        </Typography.Body2R>
      )}
    </Container>
  )
}
