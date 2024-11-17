import React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { format, parseISO } from 'date-fns'

import { Png } from '@assets/png'

import { WP } from '@/shared/tools'
import { ViewMore } from '@/shared/ui'
import { Typography } from '@/shared/ui/styled'

import { TInfoProps } from './types'

export const Info = ({ image, showImage, description, date }: TInfoProps) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={showImage}>
        <Image
          source={!image ? Png.NoAvatar : { uri: image }}
          style={styles.image}
        />
      </TouchableWithoutFeedback>

      <Typography.Body2R mBottom="12px">
        {format(parseISO(date), 'dd.MM.yyyy')}
      </Typography.Body2R>

      <ViewMore linesCount={5} text={description} mBottom="12px" />
    </>
  )
}

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: WP(60),
    marginBottom: 16,
  },
})
