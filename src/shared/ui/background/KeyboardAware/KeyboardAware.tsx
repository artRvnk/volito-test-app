import React, { forwardRef } from 'react'
import { Platform, StatusBar } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EColors } from '@/shared/lib'

import { keyboardAwareViewProps } from './config'
import { Container, getStyles } from './styles'
import { TKeyboardAwareProps } from './types'

export const KeyboardAware = forwardRef<
  KeyboardAwareScrollView,
  TKeyboardAwareProps
>(
  (
    {
      children,
      pHorizontal = 0,
      marginProps,
      bgColor = EColors.neutral_500,
      statusBarStyle = 'light-content',
      hasBottom = false,
      extraScrollHeight = 10,
      ...props
    },
    ref,
  ) => {
    const styles = getStyles({ pHorizontal, bgColor })

    return (
      <>
        <StatusBar barStyle={statusBarStyle} />

        <KeyboardAwareScrollView
          ref={ref}
          extraHeight={Platform.select({ android: 70 })}
          extraScrollHeight={Platform.select({
            ios: extraScrollHeight,
            android: 70,
          })}
          enableResetScrollToCoords
          style={styles.container}
          contentContainerStyle={styles.content}
          {...keyboardAwareViewProps}
          {...props}>
          <Container {...marginProps}>{children}</Container>
        </KeyboardAwareScrollView>
      </>
    )
  },
)
