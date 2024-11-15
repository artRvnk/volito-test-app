import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { captureException } from '@sentry/react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { EScreens } from '@/app/navigation'

import { ECollection, EColors, useNavigation } from '@/shared/lib'

import { Icon } from '@/shared/ui'

import * as S from './styles'

export const Create = () => {
  const { navigate } = useNavigation()

  const onNavigate = async () => {
    navigate(EScreens.NSingle)

    // try {
    //   await firestore()
    //     .collection(ECollection.notes)
    //     .add({
    //       id: uuidv4(),
    //       title: `Test ${uuidv4()}`,
    //       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       location: '',
    //       image: '',
    //       createdAt: new Date().toISOString(),
    //       deletedAt: new Date().toISOString(),
    //     })
    //   // console.log('User added!', {
    //   //   ...values,
    //   //   id: uuidv4(),
    //   //   authMethod,
    //   // })
    // } catch (e) {
    //   captureException(e)
    // }
  }

  return (
    <>
      <S.Button onPress={onNavigate}>
        <Icon name="Add" size={32} fill={EColors.white} />
      </S.Button>
    </>
  )
}
