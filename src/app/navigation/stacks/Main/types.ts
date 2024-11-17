import { ETab, TMainTab } from '../../tabs'
import { TNavigatorScreenParams } from '../../types'
import { TAuthStack } from '../Auth'
import { EStacks } from '../stacks'

export type TMainStack = {
  [ETab.Main]: TNavigatorScreenParams<TMainTab>
  [EStacks.Auth]: TNavigatorScreenParams<TAuthStack>
}
