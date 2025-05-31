import { FIREBASE_WEB_CLIENT_ID } from '@env'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import * as Sentry from '@sentry/react-native'
import Toast from 'react-native-toast-message'

import { firebaseErrors } from './config'

type TPhoneAuthState = 'sent' | 'timeout' | 'verified' | 'error'

class FirebaseService {
  private confirmation: FirebaseAuthTypes.ConfirmationResult | undefined
  private snapshot: FirebaseAuthTypes.PhoneAuthSnapshot | undefined
  private unsubscribeInstance?: () => void

  public unsubscribe() {
    this.unsubscribeInstance && this.unsubscribeInstance()
  }

  // Google login
  public async signInWithGoogle() {
    GoogleSignin.configure({
      webClientId: FIREBASE_WEB_CLIENT_ID,
      scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'openid'],
    })

    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })

    const signInResponse = await GoogleSignin.signIn()
    console.log('signInResponse', signInResponse)

    const idToken = signInResponse.data?.idToken

    if (!idToken) {
      throw new Error('No ID token found')
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    const signInResult = await auth().signInWithCredential(googleCredential)

    await this.updateProfile(signInResult)

    return signInResult
  }

  // Sign in with phone
  public async signInWithPhone(
    phoneNumber: string,
    resend: boolean | undefined = false,
  ) {
    const codeConfirm = await auth().signInWithPhoneNumber(phoneNumber, resend)

    this.confirmation = codeConfirm
  }

  // Confirm verification code
  public async confirmCode(code: string) {
    if (!this.confirmation) throw Error('Nothing to confirm')
    await this.confirmation?.confirm(code)
  }

  // Verify phone number
  public async verifyPhoneNumber(
    phone: string,
    resend: boolean | undefined = false,
    callbackSuccess?: (state: TPhoneAuthState) => void,
    callbackFailure?: (state: TPhoneAuthState) => void,
  ) {
    return auth()
      .verifyPhoneNumber(phone, resend)
      .on('state_changed', snap => {
        if (snap?.state === 'sent' || snap?.state === 'verified') {
          this.snapshot = snap
          callbackSuccess?.(snap?.state)
        } else {
          callbackFailure?.(snap?.state)
        }
      })
      .catch(err => {
        this.validateError(err)
      })
  }

  // Get current user
  public getUser() {
    const user = auth()?.currentUser
    return user
  }

  // Sign out user
  public async signOut() {
    await auth()?.signOut?.()
  }

  // Get token
  public async getToken() {
    return auth()?.currentUser?.getIdToken(true)
  }

  public async updateProfile(result: void | FirebaseAuthTypes.UserCredential) {
    const profile = result?.additionalUserInfo?.profile

    await auth().currentUser?.updateProfile({
      displayName: profile?.given_name || profile?.first_name || '',
      photoURL: profile?.picture,
    })
  }

  public async validateError(error: unknown) {
    // console.log('validateError-e', error)
    const err = error as { code?: string; message?: string }

    if (err.code) {
      Sentry.captureException(error)
      const existError = firebaseErrors.includes(err.code)

      if (existError) {
        Toast.show({ type: 'error', text1: `firebase_error.${err.code}` })
      }
    }
  }
}

export default new FirebaseService()
