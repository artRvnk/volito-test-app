import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { TNote } from '@/entities/note'

export type TNotesStackEditParams = TNote

export type TRouteProps = TScreenQueryProps<EScreens.NEdit>
