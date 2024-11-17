import { StyleSheet } from 'react-native'

import { EColors, EFonts } from '@/shared/lib'

export const styles = StyleSheet.create({
  toastContainer: {
    paddingHorizontal: 15,
  },
  errorToast: {
    borderLeftColor: EColors.primary_500,
  },
  successToast: {
    borderLeftColor: EColors.status_300,
  },
  infoToast: {
    borderLeftColor: EColors.gray,
  },
  text: {
    fontSize: 14,
    fontFamily: EFonts.regular,
  },
})
