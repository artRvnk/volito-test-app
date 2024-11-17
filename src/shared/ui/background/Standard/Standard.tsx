import React, { ReactNode } from 'react'
import {
  StatusBar,
  StatusBarProps,
  StyleProp,
  TVViewPropsIOS,
  ViewStyle,
} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'

import { Background } from './styled'

type TStandard = {
  color?: EColors
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  pHorizontal?: number
  avoidScrollBar?: boolean
  statusBarStyle?: StatusBarProps['barStyle']
}

export const Standard = ({
  children,
  color = EColors.neutral_500,
  pHorizontal = 0,
  statusBarStyle = 'light-content',
  avoidScrollBar,
  ...props
}: TStandard) => {
  const { top } = useSafeAreaInsets()

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <Background
        color={color}
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          paddingHorizontal: pHorizontal,
          paddingTop: avoidScrollBar ? top : 0,
          ...(props?.style as TVViewPropsIOS),
        }}>
        {children}
      </Background>
    </>
  )
}
