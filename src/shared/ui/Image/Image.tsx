import React from 'react'
import { Image as RNImage, View } from 'react-native'

import { Png } from '@assets/png'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'

import { Icon } from '../Icon'

import * as S from './styles'
import { TImageProps } from './types'

export const Image = ({
  image,
  isEditable = false,
  onPress,
  imageStyle,
  size: propSize,
  customSize = 14,
}: TImageProps) => {
  const sizeMapping = {
    large: WP(60),
    medium: WP(32),
    small: WP(18),
  }

  const size = propSize ? sizeMapping[propSize] : WP(customSize)

  const styles = S.getStyles(size)

  return (
    <View style={[styles.view, imageStyle]}>
      <RNImage
        source={
          !image
            ? Png.NoAvatar
            : {
                uri: image,
              }
        }
        style={styles.image}
      />

      {isEditable && (
        <S.Button size={size} onPress={onPress}>
          <Icon
            name={!image ? 'Plus' : 'Camera'}
            fill={EColors.transparent}
            size={32}
          />
        </S.Button>
      )}
    </View>
  )
}
