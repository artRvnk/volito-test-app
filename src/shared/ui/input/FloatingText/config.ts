import { CustomLabelProps } from 'react-native-floating-label-input'

import { EColors } from '@/shared/lib'
import { isIos } from '@/shared/tools'

export const customLabelStyles: CustomLabelProps = {
  fontSizeFocused: 12,
  fontSizeBlurred: 16,
  colorFocused: EColors.neutral_200,
  colorBlurred: EColors.neutral_200,
  leftFocused: isIos ? 0 : 2,
  leftBlurred: 0,
  topBlurred: 0,
  topFocused: 0,
}
