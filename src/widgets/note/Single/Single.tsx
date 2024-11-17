import React, { useState, useEffect } from 'react'

import storage from '@react-native-firebase/storage'
import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import ImageView from 'react-native-image-viewing'

import { useTypedSelector } from '@/app/store'

import { getNoteSelector, NoteEntity } from '@/entities/note'

import { Background } from '@/shared/ui/background'
import { Divider, Typography } from '@/shared/ui/styled'

import { TSingleProps } from './types'

export const Single = ({ image, setImage }: TSingleProps) => {
  const isFocused = useIsFocused()
  const { t } = useTranslation()

  const [isVisible, setVisible] = useState<boolean>(false)

  const { currentNote: note } = useTypedSelector(getNoteSelector)

  const getImage = async () => {
    if (!note || !note.image) {
      setImage(null)
      return
    }

    try {
      const url = await storage().ref(note.image).getDownloadURL()

      setImage(url)
    } catch (e) {
      setImage(null)
    }
  }

  useEffect(() => {
    if (!isFocused) return

    getImage()
  }, [isFocused])

  const showImage = () => setVisible(true)

  if (!note) return <Typography.Body2R>{t('loading')}</Typography.Body2R>

  return (
    <>
      <Background.Scroll pHorizontal={8}>
        <NoteEntity.Info
          {...{ image, showImage }}
          description={note.description}
          date={note.date}
        />

        <NoteEntity.Map location={note.location} />

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
