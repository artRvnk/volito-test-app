import { TAuthStackSignInParams } from '@/screens/Auth/SignIn'
import { TAuthStackSignUpParams } from '@/screens/Auth/SignUp'

import { EScreens } from '../../screens'

export type TAuthStack = {
  [EScreens.AMain]: undefined
  [EScreens.ASighIn]: TAuthStackSignInParams
  [EScreens.ASighUp]: TAuthStackSignUpParams
}
