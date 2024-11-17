import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

export type TNotesStackEditParams = {
  image: string
}

export type TRouteProps = TScreenQueryProps<EScreens.NEdit>
