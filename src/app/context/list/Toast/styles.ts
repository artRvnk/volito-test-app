import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/ui/styled'
import { EFonts } from '@/shared/ui/utils'

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
    fontFamily: EFonts.poppinsRegular,
  },
})
