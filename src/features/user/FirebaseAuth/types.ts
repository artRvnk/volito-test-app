import { TIconsKeys } from '@assets/svg'

export type TRenderButton = {
  onPress: () => void
  icon: TIconsKeys
  isFirst?: boolean
  text: string
}
