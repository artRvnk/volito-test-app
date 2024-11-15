import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { Header } from '@/widgets/header'

import { UserFeature } from '@/features/user'
import { TSignUpForm } from '@/features/user/SignUpForm'

import { userActions } from '@/entities/user'

import { ECollection, useToast } from '@/shared/lib'

import { TRouteProps } from './types'

export const SignUp = () => {
  const { params } = useRoute<TRouteProps>()

  const { authMethod, phone, ...data } = params

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { callToast } = useToast()

  const onSubmit = async (values: TSignUpForm) => {
    try {
      await firestore()
        .collection(ECollection.users)
        .add({
          ...values,
          ...(phone && { phone }),
          id: uuidv4(),
          authMethod,
        })

      // console.log('User added!', {
      //   ...values,
      //   id: uuidv4(),
      //   authMethod,
      // })

      dispatch(
        userActions.setUser({
          ...values,
          id: uuidv4(),
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
