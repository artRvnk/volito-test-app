import { TNotesStackEditParams } from '@/screens/Notes/Edit'
import { TNotesStackSingleParams } from '@/screens/Notes/Single'

import { EScreens } from '../../screens'

export type TNotesStack = {
  [EScreens.NMain]: undefined
  [EScreens.NCreate]: undefined
  [EScreens.NSingle]: TNotesStackSingleParams
  [EScreens.NEdit]: TNotesStackEditParams
}
