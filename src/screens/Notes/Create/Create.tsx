import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { NoteFeature } from '@/features/note'
import { TCreateReturn } from '@/features/note/CreateForm/types'

import { noteActions } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import { useNavigation, useToast } from '@/shared/lib'

export const Create = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { callToast } = useToast()
  const { goBack } = useNavigation()

  const { user, location } = useTypedSelector(getUserSelector)

  const onSubmit = async (values: TCreateReturn) => {
    if (!user?._id || !location) return

    console.log('onSubmit-values', values)

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
        ...values,
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
