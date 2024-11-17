import { Dispatch, SetStateAction } from 'react'

import { Edge } from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'

export type TStatusBarContext = {
  backgroundColor: TBackgroundColor
  setBackgroundColor: Dispatch<SetStateAction<TBackgroundColor>>
  edges: Edge[]
  setEdges: Dispatch<SetStateAction<Edge[]>>
}

export type TBackgroundColor = EColors | string
