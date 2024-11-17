import React from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { NoteFeature } from '@/features/note'
import { TCreateReturn } from '@/features/note/CreateForm'

import { getNoteSelector, noteActions } from '@/entities/note'

import { useImageUpload, useNavigation, useToast } from '@/shared/lib'
import { Typography } from '@/shared/ui/styled'

import { TRouteProps } from './types'

export const Edit = () => {
  const {
    params: { image: imageNote },
  } = useRoute<TRouteProps>()

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { callToast } = useToast()
  const { goBack } = useNavigation()

  const { uploadImage } = useImageUpload()

  const { currentNote } = useTypedSelector(getNoteSelector)

  const onSubmit = async (values: TCreateReturn) => {
    if (!currentNote) return

    const { image: img, ...note } = values

    const image = imageNote !== img ? await uploadImage(img) : currentNote.image

    const updatedNote = {
      ...currentNote,
      ...note,
      image,
      updatedAt: new Date().toISOString(),
    }

    dispatch(noteActions.updateNote(updatedNote))

    callToast({ title: t('success'), message: t('edit_note.updated') })

    goBack()
  }

  const renderBody = () => {
    if (!currentNote)
      return <Typography.Body2R>{t('loading')}</Typography.Body2R>

    return (
      <NoteFeature.CreateForm
        note={currentNote}
        image={imageNote}
        onSubmit={onSubmit}
      />
    )
  }

  return (
    <>
      <Header.Standard title={t('edit_note.title')} />

      {renderBody()}
    </>
  )
}
