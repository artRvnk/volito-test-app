import React from 'react'
import { Button, Text, View } from 'react-native'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { Header } from '@/widgets/header'

import { NoteWidget } from '@/widgets/note'

import { NoteFeature } from '@/features/note'

import { useGetNotes } from '@/entities/note/hooks'
import { userActions } from '@/entities/user'

export const Main = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(userActions.clearUser())
  }

  // useGetNotes()

  return (
    <>
      <Header.Standard title={t('notes.title')} canGoBack={false} />

      <NoteWidget.List />

      <NoteFeature.Create />

      {/* <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}>
        <Text>Notes Main</Text>

        <Button title="Log out" onPress={logOut} />
      </View> */}
    </>
  )
}
