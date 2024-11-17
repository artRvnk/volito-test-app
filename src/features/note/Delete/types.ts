import { ReactElement } from 'react'

import { SharedValue } from 'react-native-reanimated'

import { TNote } from '@/entities/note'

export type TDeleteProps = {
  item: TNote
  entity: ReactElement
}

export type TRightActionProps = {
  prog: SharedValue<number>
  drag: SharedValue<number>
  onPress: () => void
}
