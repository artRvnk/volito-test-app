import React, { useContext, useState } from 'react'
import { View } from 'react-native'

import { useTranslation } from 'react-i18next'
import { CountryItem } from 'react-native-country-codes-picker'

import { LoaderContext } from '@/app/context'
import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { FirebaseService } from '@/entities/user'

import { EColors, useNavigation } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { initialCountry } from '@/shared/ui/input/Phone'

import { Typography } from '@/shared/ui/styled'

import { styles } from './styles'

export const Phone = () => {
  const [correctLength, setCorrectLength] = useState(0)
  const [phoneValue, setPhoneValue] = useState('')

  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const { setLoading } = useContext(LoaderContext)

  const [country, setCountry] = useState<CountryItem | null>(initialCountry)

  const phone = phoneValue.replace(/\D/g, '')

  const signInWithPhone = async () => {
    setLoading(true)

    try {
      await FirebaseService.signInWithPhone(country?.dial_code + phone)
      onNavigate()
    } catch (e) {
      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  const onNavigate = () => {
    navigate(EScreens.AuthOtp, {
      phone: country?.dial_code + phone,
      formattedPhone: country?.dial_code + ' ' + phoneValue,
    })
  }

  return (
    <>
      <Header.Standard title={t('add_phone.title')} />

      <Background.KeyboardAware pHorizontal={8}>
        <Typography.Body1R
          mTop="28px"
          mLeft="8px"
          mRight="8px"
          color={EColors.neutral_200}>
          {t('add_phone.description')}
        </Typography.Body1R>

        <View style={styles.phoneWrapper}>
          <Input.Phone
            style={styles.countryPhone}
            setCountry={setCountry}
            setCorrectLength={setCorrectLength}
            setInputValue={setPhoneValue}
            value={phoneValue}
          />
        </View>

        <Button.Standard
          onPress={signInWithPhone}
          disabled={phone.length !== correctLength}
          text={t('add_phone.continue')}
          mTop="28px"
        />
      </Background.KeyboardAware>
    </>
  )
}
