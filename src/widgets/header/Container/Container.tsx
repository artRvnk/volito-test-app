import React, { ReactElement } from 'react'
import { StatusBar } from 'react-native'

import { getDefaultHeaderHeight } from '@react-navigation/elements'
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'

import { BarHeight, HeaderContainer, styles } from './styles'
import { TContainerProps } from './types'

export const Container = ({
  autoHeight = false,
  height,
  children,
  backgroundColor,
}: TContainerProps): ReactElement => {
  const { top } = useSafeAreaInsets()
  const frame = useSafeAreaFrame()

  const defaultHeight = getDefaultHeaderHeight(frame, false, top)

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={EColors.transparent}
        translucent
      />

      <HeaderContainer
        style={styles.shadow}
        autoHeight={autoHeight}
        height={height ? height : defaultHeight}
        backgroundColor={backgroundColor}>
        <BarHeight height={top} />
        {children}
      </HeaderContainer>
    </>
  )
}
