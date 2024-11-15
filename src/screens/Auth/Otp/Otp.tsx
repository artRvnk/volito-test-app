import React, { useContext, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/context'
import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { FirebaseService, useHandleUser } from '@/entities/user'

import { EAuthMethod, EColors, useNavigation } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Touchable, Typography } from '@/shared/ui/styled'

import { TAuthStackSighUpParams } from '../SignUp'

import { TRouteProps } from './types'

export const Otp = () => {
  const {
    params: { phone, formattedPhone },
  } = useRoute<TRouteProps>()

  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const [value, setValue] = useState('')

  const { handleUser } = useHandleUser()

  const { setLoading } = useContext(LoaderContext)

  const navigateToSignUp = (data: TAuthStackSighUpParams) => {
    navigate(EScreens.AuthSignUp, data)
  }

  const confirmCode = async () => {
    setLoading(true)

    try {
      await FirebaseService.confirmCode(value)

      const isExist = await handleUser({
        phone,
        authMethod: EAuthMethod.phone,
      })

      if (!isExist)
        navigateToSignUp({
          phone,
          authMethod: EAuthMethod.phone,
        })
    } catch (e) {
      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  const resendCode = async () => {
    setLoading(true)

    try {
      await FirebaseService.signInWithPhone(phone, true)
    } catch (e) {
      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  return (
    <>
      <Header.Standard title={t('confirm_code.title')} />

      <Background.KeyboardAware pHorizontal={8}>
        <Typography.Body1R
          color={EColors.neutral_200}
          mTop="28px"
          mBottom="36px"
          mLeft="8px"
          mRight="8px">
          {t('confirm_code.description_text_1')}{' '}
          <Typography.Body1SB color={EColors.neutral_200}>
            {formattedPhone}
          </Typography.Body1SB>
          . {t('confirm_code.description_text_2')}
        </Typography.Body1R>

        <Input.Code value={value} onChange={e => setValue(e)} />

        <Button.Standard
          onPress={confirmCode}
          disabled={value.length !== 6}
          color={value.length === 6 ? EColors.primary_400 : EColors.neutral_300}
          mTop="28px">
          <Typography.Body1SB
            color={value.length === 6 ? EColors.white : EColors.neutral_300}>
            {t('button.confirm')}
          </Typography.Body1SB>
        </Button.Standard>

        <Touchable onPress={resendCode}>
          <Typography.Body1SB mTop="20px" align="center">
            {t('confirm_code.resend_code')}
          </Typography.Body1SB>
        </Touchable>
      </Background.KeyboardAware>
    </>
  )
}
