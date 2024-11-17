import React from 'react'
import { ActivityIndicator } from 'react-native'

import ModalView from 'react-native-modal'

import { EColors } from '@/shared/lib'
import { HP } from '@/shared/tools'

export const Loader = () => {
  return (
    <ModalView
      isVisible={true}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      statusBarTranslucent={true}
      deviceHeight={HP(120)}
      useNativeDriver>
      <ActivityIndicator size="large" color={EColors.primary_400} />
    </ModalView>
  )
}
