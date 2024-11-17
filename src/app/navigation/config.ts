import { Theme } from '@react-navigation/native'

import { EColors, EFonts } from '@/shared/lib'

export const theme: Theme = {
  dark: true,
  colors: {
    primary: EColors.neutral_500,
    background: EColors.neutral_500,
    text: EColors.white,
    border: EColors.neutral_500,
    notification: EColors.neutral_500,
    card: EColors.neutral_500,
  },
  fonts: {
    regular: {
      fontFamily: EFonts.regular,
      fontWeight: '400',
    },
    bold: {
      fontFamily: EFonts.bold,
      fontWeight: '600',
    },
    heavy: {
      fontWeight: '600',
      fontFamily: '',
    },
    medium: {
      fontWeight: '500',
      fontFamily: '',
    },
  },
}
