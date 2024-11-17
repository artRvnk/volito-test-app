import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { CountryCode, getExampleNumber } from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { useTranslation } from 'react-i18next'
import {
  CountryItem,
  CountryPicker,
  ItemTemplateProps,
} from 'react-native-country-codes-picker'

import { ELanguage } from '@/app/i18n'

import { EColors } from '@/shared/lib'

import { Input } from '..'
import { Icon } from '../../Icon'
import { FlexWrapper, Typography } from '../../styled'

import { initialCountry } from './config'
import {
  CountryButton,
  ItemWrapper,
  PhoneInputWrapper,
  picker,
  styles,
} from './styles'
import { TCountryPhoneProps } from './types'

export const Phone = ({
  setCountry = () => {},
  setInputValue = () => {},
  value = '',
  setCorrectLength = () => {},
  errors = {
    country: '',
    phone: '',
  },
  country = initialCountry,
  disabled = false,
  style,
}: TCountryPhoneProps) => {
  const { t } = useTranslation()

  const [show, setShow] = useState(false)
  const [countryLocal, setCountryLocal] = useState<null | CountryItem>(country)

  const [inputMask, setInputMask] = useState<Array<string | RegExp>>([])

  useEffect(() => {
    const initializeCountryAndMask = async () => {
      if (!countryLocal?.code) return

      setCountry(countryLocal)

      try {
        const exampleNumber = getExampleNumber(
          countryLocal.code as CountryCode,
          examples,
        )

        if (exampleNumber) {
          const internationalPhoneNumber = exampleNumber.formatInternational()
          const nationalNumber = internationalPhoneNumber.split(
            `+${exampleNumber.countryCallingCode} `,
          )[1]
          const numericLength = nationalNumber.replace(/\D/g, '').length

          setCorrectLength(numericLength)

          const operatorSectionLength = nationalNumber.split(' ')[0].length
          const maskPattern: Array<string | RegExp> = []

          nationalNumber.split('').forEach((char, index) => {
            if (index === 0) {
              maskPattern.push('(', /\d/)
            } else if (index === operatorSectionLength) {
              maskPattern.push(')', ' ')
            } else if (char === ' ') {
              maskPattern.push(' ')
            } else {
              maskPattern.push(/\d/)
            }
          })

          setInputMask(maskPattern)
        }
      } catch (error) {
        console.error('Error getting example number:', error)
      }
    }

    initializeCountryAndMask()
  }, [countryLocal])

  useEffect(() => {
    setCountryLocal(country)
  }, [country])

  const renderItem = (item: ItemTemplateProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setCountry(item.item)
          setCountryLocal(item.item)
          setShow(false)
        }}>
        <ItemWrapper justify="flex-start">
          <Typography.Body1R>{item.item.flag}</Typography.Body1R>

          <Typography.Body1R mLeft="12px" numberOfLines={2} style={styles.text}>
            {item.name}
          </Typography.Body1R>

          <Typography.Body1R mLeft="12px">
            ({item.item.dial_code})
          </Typography.Body1R>
        </ItemWrapper>
      </TouchableOpacity>
    )
  }

  const getWidth = () => {
    const length = countryLocal?.dial_code?.length || 0

    if (length === 0) return '120px'
    if (length < 3) return '100px'
    if (length < 4) return '110px'

    return `${105 + length * 4.5}px`
  }

  return (
    <>
      <FlexWrapper justify="space-between" align="flex-start">
        <Input.Standard
          inputStyle={styles.input}
          inputContainerStyle={style}
          error={errors.country ? t('input.select_country') : ''}
          width={getWidth()}
          value={countryLocal?.dial_code}
          disabled={disabled}
          LeftIcon={() => (
            <Typography.Body1R>{countryLocal?.flag}</Typography.Body1R>
          )}
          RightIcon={() => <Icon size={12} name={'TriangleDown'} />}
        />

        <CountryButton onPress={() => (disabled ? () => {} : setShow(true))} />

        <PhoneInputWrapper>
          <Input.Standard
            inputStyle={{ color: EColors.white }}
            inputContainerStyle={style}
            keyboardType="number-pad"
            disabled={disabled}
            error={errors?.phone}
            value={value}
            onChange={e => {
              setInputValue(e.replace(/\D/g, ''))
            }}
            mask={inputMask}
            placeholder={t('add_phone.placeholder')}
          />
        </PhoneInputWrapper>
      </FlexWrapper>

      <CountryPicker
        style={picker}
        pickerButtonOnPress={() => {}}
        lang={ELanguage.en}
        show={show}
        itemTemplate={renderItem}
        inputPlaceholder={t('input.search')}
        onBackdropPress={() => setShow(false)}
      />
    </>
  )
}
