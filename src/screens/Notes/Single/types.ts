import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { TNote } from '@/entities/note'

export type TNotesStackSingleParams = TNote

export type TRouteProps = TScreenQueryProps<EScreens.NSingle>
