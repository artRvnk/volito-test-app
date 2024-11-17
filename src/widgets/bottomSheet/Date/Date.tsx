import React, { forwardRef, useState } from 'react'

import { parseISO } from 'date-fns'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-native-date-picker'

import { ELanguage } from '@/app/i18n'

import { EColors, useModalRef } from '@/shared/lib'
import { BottomBar } from '@/shared/ui'
import { BS } from '@/shared/ui/bottomSheet'
import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'
import { Button } from '@/shared/ui/button'

import { Typography } from '@/shared/ui/styled'

import { Container, styles } from './styles'
import { TDatePickerProps } from './types'

export const DateBS = forwardRef<TBottomSheetModalRef, TDatePickerProps>(
  (
    {
      value = new Date().toISOString(),
      onChange = () => {},
      pickerProps,
      maximumDate,
      minimumDate,
      mode = 'date',
      locale,
      title,
    },
    ref,
  ) => {
    const { t, i18n } = useTranslation()
    const bottomSheetRef = useModalRef(ref)

    const [selected, setSelected] = useState<string>(value)

    const onConfirm = () => {
      const newValue = selected ? selected : new Date().toISOString()
      onChange(newValue)

      bottomSheetRef.current?.close()
    }

    return (
      <BS.Modal
        enableDynamicSizing
        withScroll
        snapPoints={[]}
        scrollEnabled={false}
        ref={bottomSheetRef}>
        <Container>
          <Typography.H3 style={styles.title}>{title}</Typography.H3>

          <DatePicker
            style={styles.datePicker}
            date={!!selected ? parseISO(selected) : new Date()}
            // date={new Date()}
            locale={locale || (i18n.language as ELanguage)}
            onDateChange={val => setSelected(val.toISOString())}
            androidVariant={'iosClone'}
            mode={mode}
            theme={'dark'}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            fadeToColor={EColors.neutral_500}
            {...pickerProps}
          />
        </Container>

        <BottomBar>
          <Button.Standard
            onPress={onConfirm}
            color={EColors.primary_400}
            text={t('button.confirm')}
          />
        </BottomBar>
      </BS.Modal>
    )
  },
)
