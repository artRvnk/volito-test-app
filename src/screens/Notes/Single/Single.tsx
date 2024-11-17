import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

import storage from '@react-native-firebase/storage'
import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import ImageView from 'react-native-image-viewing'

import { Png } from '@assets/png'

import { Header } from '@/widgets/header'

import { TNote } from '@/entities/note'

import { WP } from '@/shared/tools'
import { ViewMore } from '@/shared/ui'
import { Background } from '@/shared/ui/background'

import { Divider, Typography } from '@/shared/ui/styled'

import { TRouteProps } from './types'

export const Single = () => {
  const { t } = useTranslation()

  const {
    params: { item },
  } = useRoute<TRouteProps>()

  const note: TNote = item

  const [image, setImage] = useState<string | null>(null)
  const [isVisible, setVisible] = useState<boolean>(false)

  // const note = item
  // console.log('note', note)

  const getImage = async () => {
    try {
      if (!note.image) return

      const url = await storage().ref(note.image).getDownloadURL()

      setImage(url)
    } catch (e) {
      setImage(null)
    }
  }

  useEffect(() => {
    getImage()
  }, [])

  const showImage = () => setVisible(true)

  return (
    <>
      <Header.Standard title={note.title} />

      <Background.Scroll pHorizontal={8}>
        <TouchableWithoutFeedback onPress={showImage}>
          <Image
            source={!image ? Png.NoAvatar : { uri: image }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>

        <ViewMore linesCount={5} text={note.description ?? ''} />

        <Divider height={50} />
      </Background.Scroll>

      {isVisible && !!image && (
        <ImageView
          images={[{ uri: image }]}
          imageIndex={0}
          visible={isVisible}
          onRequestClose={() => setVisible(false)}
        />
      )}
    </>
  )
}

export const styles = StyleSheet.create({
  image: {
    // width: size,
    // width: '100%',
    width: '100%',
    height: WP(60),
    // borderRadius: 24,
    marginBottom: 16,
  },
})
