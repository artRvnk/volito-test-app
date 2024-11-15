import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { EAuthMethod } from '@/shared/lib'

export type TAuthStackSighUpParams = {
  name?: string
  surname?: string
  email?: string
  phone?: string
  authMethod: EAuthMethod
}

export type TRouteProps = TScreenQueryProps<EScreens.AuthSignUp>
