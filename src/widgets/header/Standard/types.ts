import { TIconsKeys } from '@assets/Svg'

import { TIconProps } from '@/shared/ui'

export type TIconConfig = {
  name: TIconsKeys
  props?: Omit<TIconProps, 'name'>
  onPress?: () => void
}

export type TStandardProps = {
  title?: string
  canGoBack?: boolean
  icon?: TIconsKeys
  iconProps?: Omit<TIconProps, 'name'>
  onPress?: () => void
  icons?: TIconConfig[]
}
