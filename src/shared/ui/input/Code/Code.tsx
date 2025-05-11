import React from 'react'
import { Platform, View } from 'react-native'

import { useTranslation } from 'react-i18next'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import { EColors } from '@/shared/lib'

import { FlexWrapper, Typography } from '../../styled'

import { CELL_COUNT } from './config'
import { Ceil, styles } from './styles'
import { TCodeProps } from './types'

export const Code = ({ error, value, onChange = () => {} }: TCodeProps) => {
  const { t, keys } = useTranslation()
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })

  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  })

  return (
    <FlexWrapper flexDirection="column">
      <CodeField
        ref={ref}
        {...inputProps}
        value={value}
        autoFocus
        onChangeText={onChange}
        rootStyle={styles.root}
        cellCount={CELL_COUNT}
        keyboardAppearance="dark"
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View key={index}>
            <Ceil isError={!!error} onLayout={getCellOnLayoutHandler(index)}>
              <Typography.H3
                color={isFocused ? EColors.primary_300 : EColors.white}>
                {symbol || (isFocused ? <Cursor delay={1000} /> : null)}
              </Typography.H3>
            </Ceil>
          </View>
        )}
      />

      {!!error && (
        <Typography.Body2R
          mTop="10px"
          mLeft="8px"
          mBottom="10px"
          color={EColors.red_500}>
          {t(error as keyof typeof keys)}
        </Typography.Body2R>
      )}
    </FlexWrapper>
  )
}
