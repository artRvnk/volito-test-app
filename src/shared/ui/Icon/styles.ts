import { View } from 'react-native'

import styled from 'styled-components'

import { MARGIN, TMargin } from '@/shared/lib'

export const Container = styled(View)<TMargin>`
  ${prop => MARGIN(prop)}
`
