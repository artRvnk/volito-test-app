import React, { useContext } from 'react'

import storage from '@react-native-firebase/storage'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { LoaderContext } from '@/app/context'
import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { NoteFeature } from '@/features/note'
import { TCreateReturn } from '@/features/note/CreateForm'

import { noteActions } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import { useNavigation, useToast } from '@/shared/lib'

export const Create = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { callToast } = useToast()
  const { goBack } = useNavigation()

  const { user, location } = useTypedSelector(getUserSelector)

  const { setLoading } = useContext(LoaderContext)

  const uploadImage = async (image: string) => {
    console.log('putFile-image', image)

    const filename = image?.split('/')?.[image?.split('/')?.length - 1]
    console.log('putFile-filename', filename)

    setLoading(true)

    try {
      const response = await storage().ref(filename).putFile(image)
      console.log('putFile-response', response)

      setLoading(false)

      return filename
    } catch (e) {
      console.log('putFile-e', e)

      setLoading(false)

      return null
    }
  }

  const onSubmit = async (values: TCreateReturn) => {
    if (!user?._id || !location) return

    console.log('onSubmit-values', values)

    const image = await uploadImage(values.image)

    const { title, description } = values

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
        title,
        description,
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
