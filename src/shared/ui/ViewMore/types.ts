import { TMargin } from '@/shared/lib'

import { Typography } from '../Styled'

export type TViewMoreProps = {
  linesCount: number
  text: string
  fontKey?: keyof typeof Typography
} & TMargin
