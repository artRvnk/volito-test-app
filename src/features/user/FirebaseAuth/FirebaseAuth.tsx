import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import { TIconsKeys } from '@assets/svg'

import { LoaderContext } from '@/app/context'

import { EScreens } from '@/app/navigation'

import { TAuthStackSighUpParams } from '@/screens/Auth/SignUp'

import { FirebaseService, useHandleUser } from '@/entities/user'

import { EAuthMethod, EColors, useNavigation } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { Button } from '@/shared/ui/button'

import { Typography } from '@/shared/ui/styled'

import { IconWrapper } from './styles'

type TRenderButton = {
  onPress: () => void
  icon: TIconsKeys
  isFirst?: boolean
  text: string
}

export const FirebaseAuth = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const { handleUser } = useHandleUser()

  const { setLoading } = useContext(LoaderContext)

  const navigateToPhone = () => {
    navigate(EScreens.AuthPhone)
  }

  const navigateToSignUp = (data: TAuthStackSighUpParams) => {
    navigate(EScreens.AuthSignUp, data)
  }

  const signInWithGoogle = async () => {
    setLoading(true)

    try {
      const response = await FirebaseService.signInWithGoogle()

      const name = response?.additionalUserInfo?.profile?.given_name || ''
      const surname = response?.additionalUserInfo?.profile?.family_name || ''
      const email = response?.additionalUserInfo?.profile?.email || ''

      const isExist = await handleUser({
        email,
        authMethod: EAuthMethod.google,
      })

      if (!isExist)
        navigateToSignUp({
          name,
          surname,
          email,
          authMethod: EAuthMethod.google,
        })
    } catch (e: unknown) {
      const isErrorWithMessage = (
        error: unknown,
      ): error is { message: string } => {
        return typeof error === 'object' && error !== null && 'message' in error
      }

      if (isErrorWithMessage(e) && !!e.message) {
        FirebaseService.validateError(e)

        setLoading(false)
        return
      }

      FirebaseService.validateError(e)
    }

    setLoading(false)
  }

  const renderButton = ({ onPress, icon, isFirst, text }: TRenderButton) => {
    return (
      <Button.Standard
        onPress={onPress}
        color={EColors.neutral_500}
        {...(!isFirst && { mTop: '12px' })}>
        <IconWrapper>
          <Icon name={icon} size={26} />
        </IconWrapper>

        <Typography.Body2SB>{text}</Typography.Body2SB>
      </Button.Standard>
    )
  }

  return (
    <>
      {renderButton({
        onPress: navigateToPhone,
        icon: 'Phone',
        isFirst: true,
        text: t('auth_main.with_phone'),
      })}

      {renderButton({
        onPress: signInWithGoogle,
        icon: 'Google',
        text: t('auth_main.with_google'),
      })}
    </>
  )
}
