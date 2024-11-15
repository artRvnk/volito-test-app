import { View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { TAB_HEIGHT } from '@/shared/lib/hooks/tab'
import { Touchable } from '@/shared/ui/styled'

export const Button = styled(Touchable)`
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${EColors.primary_400};
  border-radius: 50px;

  position: absolute;
  bottom: ${TAB_HEIGHT * 1.5};
  right: 8px;
`
