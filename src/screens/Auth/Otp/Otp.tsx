import React, { useContext, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { LoaderContext } from '@/app/context'
import { EScreens } from '@/app/navigation'

// import { Header } from '@/widgets/header'

import { Header } from '@/widgets/header'

import {
  FirebaseService,
  // UserService,
  // useGetUserMe,
  // userActions,
} from '@/entities/user'

import { EColors, useNavigation } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Touchable, Typography } from '@/shared/ui/styled'

import { TRouteProps } from './types'

export const Otp = () => {
  const {
    params: { phone, formattedPhone, isLink },
  } = useRoute<TRouteProps>()

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { navigate, goBack } = useNavigation()

  const [value, setValue] = useState('')

  // const { getUserMe } = useGetUserMe()

  const { setLoading } = useContext(LoaderContext)

  const confirmCode = async () => {
    return

    setLoading(true)

    try {
      if (isLink) {
        await linkPhoneNumber()
        return
      }

      await FirebaseService.confirmCode(value)

      // const isCreated = await getUserMe()

      // if (!isCreated) onNavigate()
    } catch (e: unknown) {
      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  const linkPhoneNumber = async () => {
    return

    try {
      await FirebaseService.linkPhoneNumber(value)

      // await UserService.patchUserMe({ phone })

      // dispatch(userActions.updateCurrentUser({ phone }))

      setLoading(false)

      goBack()
    } catch (e) {
      captureException(e)
    }
  }

  const resendCode = async () => {
    return
    setLoading(true)

    try {
      await FirebaseService.signInWithPhone(phone, true)
    } catch (e) {
      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  const onNavigate = () => {
    // dispatch(userActions.setUserCreation({ phone }))
    // navigate(EScreens.AuthRole)
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
