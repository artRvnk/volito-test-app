import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { TUser } from '@/entities/user'

export type TAuthStackSighUpParams = TUser

export type TRouteProps = TScreenQueryProps<EScreens.AuthSignUp>
