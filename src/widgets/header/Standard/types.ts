import { TIconsKeys } from '@assets/Svg'

import { TIconProps } from '@/shared/ui'

export type TStandardProps = {
  title?: string
  canGoBack?: boolean
  icon?: TIconsKeys
  iconProps?: Omit<TIconProps, 'name'>
  onPress?: () => void
}
