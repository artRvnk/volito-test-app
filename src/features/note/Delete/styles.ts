import { StyleSheet } from 'react-native'

import { EColors } from '@/shared/lib'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
  },

  delete: {
    width: 50,
    height: '100%',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: EColors.primary_400,
  },

  deleteMask: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: EColors.neutral_400,
    height: '100%',
    width: 8,
  },
})
