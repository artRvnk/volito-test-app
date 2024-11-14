import React from 'react'
import { Text, View } from 'react-native'

import firestore from '@react-native-firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'

// import { TSignUpForm } from '@/features/user/SignUpForm/types'
import { TSignUpForm } from '@/features/user/SignUpForm'

import { userActions } from '@/entities/user'

import { useToast } from '@/shared/lib'

import { TRouteProps } from './types'

export const SignUp = () => {
  const { params } = useRoute<TRouteProps>()

  const { authMethod, ...data } = params
  // console.log('data', data)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { callToast } = useToast()

  const onSubmit = async (values: TSignUpForm) => {
    try {
      await firestore()
        .collection('users')
        .add({
          ...values,
          authMethod,
        })

      console.log('User added!')

      dispatch(
        userActions.setUser({
          ...values,
          authMethod,
        }),
      )

      callToast({ title: t('success'), message: t('sign_up.user_created') })
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
