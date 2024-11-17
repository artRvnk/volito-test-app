import React from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { NoteFeature } from '@/features/note'
import { TCreateReturn } from '@/features/note/CreateForm'

import { noteActions, TCoordinates } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import { useImageUpload, useNavigation, useToast } from '@/shared/lib'

export const Create = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { callToast } = useToast()
  const { goBack } = useNavigation()

  const { uploadImage } = useImageUpload()

  const { user, location: dd } = useTypedSelector(getUserSelector)

  // TODO - fix location
  const location: TCoordinates = {
    latitude: 50.45483,
    longitude: 30.477702,
  }

  const onSubmit = async (values: TCreateReturn) => {
    if (!user?._id || !location) return

    const { image: img, ...note } = values

    const image = await uploadImage(img)

    dispatch(
      noteActions.postNote({
        id: uuidv4(),
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        owner: user._id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        image,
        ...note,
      }),
    )

    callToast({ title: t('success'), message: t('create_note.created') })

    goBack()
  }

  return (
    <>
      <Header.Standard title={t('create_note.title')} />

      <NoteFeature.CreateForm onSubmit={onSubmit} />
    </>
  )
}
