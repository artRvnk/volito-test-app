import { ETab } from '../../tabs'
import { TMainTab } from '../../tabs/Main/types'
import { TNavigatorScreenParams } from '../../types'
import { TAuthMainStack } from '../Auth/Main/types'
import { THomeStack } from '../Home'
import { EStacks } from '../stacks'

export type TMainStack = {
  //Add stack/screens ad this types for stack
  [ETab.Main]: TNavigatorScreenParams<TMainTab>
  [EStacks.AuthMain]: TNavigatorScreenParams<TAuthMainStack>
  [EStacks.Home]: TNavigatorScreenParams<THomeStack>
}
