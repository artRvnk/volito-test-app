import { StyleSheet } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'
import { FlexWrapper } from '@/shared/ui/styled'

export const Container = styled(FlexWrapper)`
  padding: 16px 12px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const styles = StyleSheet.create({
  datePicker: {
    width: WP(100),
    backgroundColor: EColors.neutral_500,
  },
  title: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
})
