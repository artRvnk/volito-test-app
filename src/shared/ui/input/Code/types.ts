import { TMargin } from '@/shared/lib'

export type TCodeProps = {
  error?: string
  onChange?: (val: string) => void
  value?: string
} & TMargin
