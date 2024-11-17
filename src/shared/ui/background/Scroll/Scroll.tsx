import React, { useMemo } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'
import { TAB_HEIGHT } from '@/shared/lib/hooks/tab'

import * as S from './styles'
import { TScrollProps } from './types'

export const Scroll = ({
  children,
  bgColor = EColors.neutral_500,
  pHorizontal = 16,
  withTop = false,
  withBottom = true,
  withBTab = false,
  ...props
}: TScrollProps) => {
  const { bottom, top } = useSafeAreaInsets()

  const getBottom = () => {
    if (withBTab) return TAB_HEIGHT * 1.25
    if (withBottom) return bottom
    return 16
  }

  const styles = useMemo(
    () => ({
      paddingHorizontal: pHorizontal,
      paddingTop: withTop ? top : 0,
      paddingBottom: getBottom(),
    }),
    [pHorizontal, withBottom, withTop],
  )

  return (
    <S.Scroll contentContainerStyle={styles} color={bgColor} {...props}>
      {children}
    </S.Scroll>
  )
}
