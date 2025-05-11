import React from 'react'

import { useTranslation } from 'react-i18next'

import { EColors } from '@/shared/lib'

import { FlexWrapper, Typography } from '../../styled'

import { Input, CCounter } from './styles'
import { TTextAreaProps } from './types'

export const TextArea = ({
  value,
  onChange = () => {},
  label,
  error,
  disabled,
  maxCharacters,
  ...props
}: TTextAreaProps) => {
  const { t, keys } = useTranslation()

  const maxLengthExceed = maxCharacters
    ? (value?.length || 0) > maxCharacters
    : false

  return (
    <FlexWrapper {...props} flexDirection={'column'} align={'flex-start'}>
      {!!label && (
        <Typography.Body2R mBottom="8px" mLeft="8px">
          {label}
        </Typography.Body2R>
      )}

      <Input
        value={value}
        onChangeText={onChange}
        editable={!disabled}
        placeholderTextColor={EColors.neutral_200}
        hasError={!!error}
        textAlignVertical="top"
        cursorColor={EColors.primary_300}
        multiline
        {...props}
      />

      {!!error && (
        <Typography.Body2R
          mTop={'2px'}
          mLeft={'8px'}
          color={EColors.red_400}
          align="right">
          {t(error as keyof typeof keys)}
        </Typography.Body2R>
      )}

      {!!maxCharacters && (
        <CCounter>
          <Typography.Body2R
            mTop={'5px'}
            color={
              error || maxLengthExceed ? EColors.red_400 : EColors.neutral_200
            }>
            {value?.length || 0}/{maxCharacters}
          </Typography.Body2R>
        </CCounter>
      )}
    </FlexWrapper>
  )
}
