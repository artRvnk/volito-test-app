import { StyleSheet } from 'react-native'

import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { HP } from '@/shared/tools'

export const styles = StyleSheet.create({
  background: { backgroundColor: EColors.neutral_500 },
  indicator: { backgroundColor: EColors.neutral_400, width: 68, height: 6 },
})

export const Scroll = styled(BottomSheetScrollView).attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  max-height: ${HP(95)}px;
`

export const Container = styled(BottomSheetView)``
