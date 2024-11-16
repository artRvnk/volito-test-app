import { ImageStyle, StyleProp } from 'react-native'

export type TImageProps = {
  image?: string
  isEditable?: boolean
  onPress?: () => void
  size?: 'large' | 'medium' | 'small'
  customSize?: number
  imageStyle?: StyleProp<ImageStyle>
}
