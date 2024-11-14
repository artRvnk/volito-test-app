import { TAuthStackOtpParams } from '@/screens/Auth/Otp'
import { TAuthStackSighUpParams } from '@/screens/Auth/SignUp'

import { EScreens } from '../../screens'

export type TAuthStack = {
  [EScreens.AuthMain]: undefined
  [EScreens.AuthSignIn]: undefined
  [EScreens.AuthSignUp]: TAuthStackSighUpParams
  [EScreens.AuthPhone]: undefined
  [EScreens.AuthOtp]: TAuthStackOtpParams
}
