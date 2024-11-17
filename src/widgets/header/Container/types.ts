import { ReactNode } from 'react'

import { EColors } from '@/shared/lib'

export type TContainerProps = {
  children: ReactNode
  height?: number
  autoHeight?: boolean
  backgroundColor?: EColors
}
