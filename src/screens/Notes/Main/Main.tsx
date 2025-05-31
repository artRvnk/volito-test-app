import React, { useState } from 'react'
import { Alert } from 'react-native'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'
import { NoteWidget } from '@/widgets/note'

import { UserFeature } from '@/features/user'

import { userActions } from '@/entities/user'

import { EColors, useNavigation } from '@/shared/lib'
import { Icon } from '@/shared/ui'

import * as S from './styles'

export const Main = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  const [isVisible, setVisible] = useState(false)

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  const onNavigate = async () => {
    navigate(EScreens.NCreate)
  }

  const callAlert = () => {
    Alert.alert(
      t('warning'),
      t('log_out'),
      [
        {
          text: t('no'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: t('yes'),
          style: 'destructive',
          onPress: () => dispatch(userActions.logOut()),
        },
      ],
      {
        cancelable: false,
        userInterfaceStyle: 'dark',
      },
    )
  }

  return (
    <>
      <Header.Standard
        title={t('notes.title')}
        canGoBack={false}
        icons={[
          {
            name: 'Global',
            props: { fill: EColors.primary_400 },
            onPress: openModal,
          },
          { name: 'Logout', onPress: callAlert },
        ]}
      />

      <NoteWidget.List />

      <UserFeature.Language isVisible={isVisible} onClose={closeModal} />

      <S.Button onPress={onNavigate}>
        <Icon name="Add" size={32} fill={EColors.white} />
      </S.Button>
    </>
  )
}
