import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'
import { TSignUpReturn } from '@/features/user/SignUpForm'

import { useHandleUser } from '@/entities/user'

import { ECollection, useToast } from '@/shared/lib'

import { TRouteProps } from './types'

export const SignUp = () => {
  const { params } = useRoute<TRouteProps>()

  const { authMethod, phone, ...data } = params

  const { t } = useTranslation()

  const { callToast } = useToast()
  const { handleUser } = useHandleUser()

  const onSubmit = async (values: TSignUpReturn) => {
    try {
      await firestore()
        .collection(ECollection.users)
        .add({
          ...values,
          ...(phone && { phone }),
          id: uuidv4(),
          authMethod,
        })

      await checkUser(values.email)

      callToast({ title: t('success'), message: t('sign_up.user_created') })
    } catch (e) {
      console.log('onSubmit-e', e)
      captureException(e)
    }
  }

  const checkUser = async (email: string) => {
    try {
      await handleUser({
        ...(phone ? { phone } : { email }),
        authMethod,
      })
    } catch (e) {
      captureException(e)
    }
  }

  return (
    <>
      <Header.Standard title={t('sign_up.title')} />

      <UserFeature.SignUpForm {...{ data, onSubmit }} />
    </>
  )
}
