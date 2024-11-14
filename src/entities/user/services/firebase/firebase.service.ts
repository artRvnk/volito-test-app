import { Platform } from 'react-native'

import { FIREBASE_WEB_CLIENT_ID } from '@env'
import appleAuth from '@invertase/react-native-apple-authentication'
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
      // scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'openid'],
    })

    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })

    const signInResponse = await GoogleSignin.signIn()
    console.log('Auth-signInWithGoogle-signInResponse', signInResponse)

    const idToken = signInResponse.data?.idToken

    if (!idToken) {
      throw new Error('No ID token found')
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    console.log('Auth-signInWithGoogle-googleCredential', googleCredential)

    const signInResult = await auth().signInWithCredential(googleCredential)
    console.log('Auth-signInWithGoogle-signInResult', signInResult)

    await this.updateProfile(signInResult)

    return signInResult
  }

  // Sign in with apple
  public async signInWithApple() {
    const iOSMajorVersion = parseInt(Platform.Version as string, 10)
    console.log('Auth-signInWithApple iOSMajorVersion', iOSMajorVersion)

    console.log('Auth-signInWithApple State', appleAuth.State)

    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    })
    console.log(
      'Auth-signInWithApple appleAuthRequestResponse',
      appleAuthRequestResponse,
    )

    if (!appleAuthRequestResponse.identityToken) {
      console.log('Auth-signInWithApple failed - no identify token returned')
      throw new Error('Apple Sign-In failed - no identify token returned')
    }

    const { identityToken, nonce } = appleAuthRequestResponse
    console.log('Auth-signInWithApple identityToken', identityToken)

    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    )
    console.log('Auth-signInWithApple appleCredential', appleCredential)

    const signInResult = await auth().signInWithCredential(appleCredential)
    console.log('Auth-signInWithApple signInResult', signInResult)

    await this.updateProfile(signInResult)

    return signInResult
  }

  // Sign in with phone
  public async signInWithPhone(
    phoneNumber: string,
    resend: boolean | undefined = false,
  ) {
    const codeConfirm = await auth().signInWithPhoneNumber(phoneNumber, resend)
    console.log('codeConfirm', codeConfirm)

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

  // Link phone number
  public async linkPhoneNumber(code: string) {
    if (!this.snapshot) throw Error('Nothing to confirm')

    const credential = auth.PhoneAuthProvider.credential(
      this.snapshot.verificationId,
      code,
    )

    return auth().currentUser?.updatePhoneNumber(credential)
  }

  // Unlink phone number
  public async unlinkUserPhone() {
    return auth().currentUser?.unlink(auth.PhoneAuthProvider.PROVIDER_ID)
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
    console.log(error)
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
