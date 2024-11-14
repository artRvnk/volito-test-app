import React, { useMemo } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'

import * as S from './styles'
import { TContainerProps } from './types'

export const Container = ({
  children,
  bgColor = EColors.neutral_500,
  pHorizontal = 16,
  withBottom = true,
  withTop = false,
  ...props
}: TContainerProps) => {
  const { bottom, top } = useSafeAreaInsets()

  const styles = useMemo(
    () => ({
      paddingHorizontal: pHorizontal,
      paddingTop: withTop ? top : 0,
      paddingBottom: withBottom ? bottom : 0,
    }),
    [pHorizontal, withBottom, withTop],
  )

  return (
    <S.Container style={styles} color={bgColor} {...props}>
      {children}
    </S.Container>
  )
}
