import { EStacks, TMapStack, TNotesStack } from '../../stacks'
import { TNavigatorScreenParams } from '../../types'

export type TMainTab = {
  [EStacks.Notes]: TNavigatorScreenParams<TNotesStack>
  [EStacks.Map]: TNavigatorScreenParams<TMapStack>
}
