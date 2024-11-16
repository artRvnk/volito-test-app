import firestore from '@react-native-firebase/firestore'

import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { TUser, userActions } from '@/entities/user'

import { EAuthMethod, ECollection, useToast } from '@/shared/lib'

type THandleUser = {
  email?: string
  phone?: string
  authMethod: EAuthMethod
}

export const useHandleUser = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { callToast } = useToast()

  const handleUser = async ({ phone, email, authMethod }: THandleUser) => {
    try {
      let query = firestore()
        .collection(ECollection.users)
        .where('authMethod', '==', authMethod)
        .limit(1)

      if (phone) {
        query = query.where('phone', '==', phone)
      }

      if (email) {
        query = query.where('email', '==', email)
      }

      const userSnapshot = await query.get()

      if (!userSnapshot.empty) {
        console.log('userSnapshot', userSnapshot)
        console.log('userSnapshot-id', userSnapshot.docs[0].id)

        const userData = {
          _id: userSnapshot.docs[0].id,
          ...userSnapshot.docs[0].data(),
        } as TUser

        console.log('userData', userData)

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
