import firestore from '@react-native-firebase/firestore'

import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { TUser, userActions } from '@/entities/user'

import { EAuthMethod, useToast } from '@/shared/lib'

type THandleUser = {
  email?: string
  authMethod: EAuthMethod
}

export const useHandleUser = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { callToast } = useToast()

  const handleUser = async ({ email, authMethod }: THandleUser) => {
    try {
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '==', email)
        .where('authMethod', '==', authMethod)
        .limit(1)
        .get()

      if (!userSnapshot.empty) {
        console.log('User exists: true')

        const userData = userSnapshot.docs[0].data() as TUser
        console.log('User found:', userData)

        dispatch(userActions.setUser(userData))

        callToast({ title: t('success'), message: t('auth_main.success') })

        return true
      } else {
        return false
      }
    } catch (e) {
      captureException(e)
    }
  }

  return { handleUser }
}
