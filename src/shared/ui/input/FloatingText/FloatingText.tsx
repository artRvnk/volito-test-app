import React, { useMemo, useState } from 'react'
import {
  View,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from 'react-native'

import { useTranslation } from 'react-i18next'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AndroidSoftInputModes } from 'react-native-keyboard-controller'

import { EColors } from '@/shared/lib'
import { useKeyboardMode } from '@/shared/lib/hooks/keyboard'

import { Icon } from '../../Icon'
import { FlexWrapper, Typography } from '../../styled'

import { customLabelStyles } from './config'
import * as S from './styles'

import type { TFloatingTextProps, TRenderIcon } from './types'

export const FloatingText = ({
  value,
  onChange = () => {},
  label = '',
  inputProps,
  onPress,
  icon,
  LeftIcon,
  iconProps,
  onPressIcon,
  error,
  disabled,
  size = 'large',
  multiline = false,
  ...props
}: TFloatingTextProps) => {
  const { t, keys } = useTranslation()

  const [lineHeight, setLineHeight] = useState<number>(0)

  useKeyboardMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_NOTHING)

  const renderIcon = ({ iconName, pressIcon }: TRenderIcon) => {
    if (!iconName) return null

    return (
      <S.TouchIcon onPress={pressIcon} activeOpacity={!!pressIcon ? 0.8 : 1}>
        <Icon name={iconName} fill={EColors.neutral_200} {...iconProps} />
      </S.TouchIcon>
    )
  }

  const rightComponent = useMemo(() => {
    return (
      <S.CIcon
        pointerEvents={!!onPressIcon ? 'auto' : 'none'}
        {...(icon && { mLeft: '6px' })}>
        {renderIcon({ iconName: icon, pressIcon: onPressIcon })}
      </S.CIcon>
    )
  }, [icon, onPressIcon])

  const leftComponent = useMemo(() => {
    return (
      <S.CIcon
        pointerEvents={!!onPressIcon ? 'auto' : 'none'}
        {...(LeftIcon && { mRight: '6px' })}>
        {renderIcon({ iconName: LeftIcon, pressIcon: onPressIcon })}
      </S.CIcon>
    )
  }, [LeftIcon, onPressIcon])

  const handleSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    const { height } = event.nativeEvent.contentSize

    setLineHeight(height)
  }

  const styles = S.getStyles({ error, size, multiline, lineHeight, disabled })

  return (
    <FlexWrapper
      {...props}
      flexDirection={'column'}
      align={'flex-end'}
      mBottom="12px">
      <S.Button activeOpacity={onPress ? 0.8 : 1} onPress={onPress} size={size}>
        <View pointerEvents={onPress ? 'none' : 'auto'}>
          <FloatingLabelInput
            multiline={multiline}
            value={value}
            label={label}
            onChangeText={onChange}
            rightComponent={rightComponent}
            leftComponent={leftComponent}
            selectionColor={!!error ? EColors.primary_500 : EColors.white}
            inputStyles={styles.input}
            labelStyles={styles.labelStyles}
            containerStyles={styles.container}
            customLabelStyles={customLabelStyles}
            editable={!disabled}
            // multiline={multiline}
            keyboardAppearance={'dark'}
            customShowPasswordComponent={<></>}
            customHidePasswordComponent={<></>}
            onContentSizeChange={handleSizeChange}
            {...inputProps}
          />
        </View>
      </S.Button>

      {!!error && (
        <Typography.Body2R
          mTop={'2px'}
          mLeft={'8px'}
          color={EColors.primary_400}
          align="right">
          {t(error as keyof typeof keys)}
        </Typography.Body2R>
      )}
    </FlexWrapper>
  )
}
