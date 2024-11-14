import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

export type TAuthStackOtpParams = {
  phone: string
  formattedPhone: string
  isLink?: boolean
}

export type TRouteProps = TScreenQueryProps<EScreens.AuthOtp>
