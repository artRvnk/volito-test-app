import firestore from '@react-native-firebase/firestore'

import { captureException } from '@sentry/react-native'
import { useDispatch } from 'react-redux'

import { TUser, userActions } from '@/entities/user'

import { EAuthMethod } from '@/shared/lib'

type THandleUser = {
  email?: string
  authMethod: EAuthMethod
}

export const useHandleUser = () => {
  const dispatch = useDispatch()

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
