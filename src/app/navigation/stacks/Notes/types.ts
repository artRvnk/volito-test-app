import { TNotesStackEditParams } from '@/screens/Notes/Edit'

import { EScreens } from '../../screens'

export type TNotesStack = {
  [EScreens.NMain]: undefined
  [EScreens.NCreate]: undefined
  [EScreens.NSingle]: undefined
  [EScreens.NEdit]: TNotesStackEditParams
}
