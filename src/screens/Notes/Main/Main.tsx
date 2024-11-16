import React from 'react'

import { Button } from 'react-native'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'
import { NoteWidget } from '@/widgets/note'

import { userActions } from '@/entities/user'

import { EColors, useNavigation } from '@/shared/lib'
import { Icon } from '@/shared/ui'

import * as S from './styles'

export const Main = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  const logOut = () => {
    dispatch(userActions.clearUser())
  }

  const onNavigate = async () => {
    navigate(EScreens.NCreate)

    // try {
    //   await firestore()
    //     .collection(ECollection.notes)
    //     .add({
    //       owner: '1tzGzpM1fUMKddLYSYbI',
    //       id: uuidv4(),
    //       title: `Test ${uuidv4()}`,
    //       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       location: '',
    //       image: '',
    //       createdAt: new Date().toISOString(),
    //       updatedAt: new Date().toISOString(),
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
      <Header.Standard title={t('notes.title')} canGoBack={false} />

      <Button title="Log out" onPress={logOut} />

      <NoteWidget.List />

      <S.Button onPress={onNavigate}>
        <Icon name="Add" size={32} fill={EColors.white} />
      </S.Button>
    </>
  )
}
