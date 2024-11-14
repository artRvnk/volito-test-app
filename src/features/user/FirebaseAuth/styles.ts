import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'

export const IconWrapper = styled(View)`
  position: absolute;
  left: 16px;
  top: 16px;
`

export const styles = StyleSheet.create({
  background: {
    backgroundColor: EColors.primary_400,
  },
  link_wrapper: {
    justifyContent: 'flex-end',
  },
  link: {},
  image: {
    width: WP(100),
    // maxHeight: isSmallScreen ? 200 : 260
  },
})
