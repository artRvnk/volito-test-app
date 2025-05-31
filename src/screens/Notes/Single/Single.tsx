import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'
import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'
import { NoteWidget } from '@/widgets/note'

import { getNoteSelector } from '@/entities/note'

import { useNavigation } from '@/shared/lib'
import { Typography } from '@/shared/ui/styled'

export const Single = () => {
  const { t } = useTranslation()

  const { currentNote } = useTypedSelector(getNoteSelector)

  const [image, setImage] = useState<string | null>(null)

  const { navigate } = useNavigation()

  const onNavigate = () => {
    navigate(EScreens.NEdit, { image })
  }

  const renderBody = () => {
    if (!currentNote)
      return <Typography.Body2R>{t('loading')}</Typography.Body2R>

    return <NoteWidget.Single note={currentNote} {...{ image, setImage }} />
  }

  return (
    <>
      <Header.Standard
        title={currentNote?.title}
        icon="Edit"
        iconProps={{ fill: 'blue' }}
        onPress={onNavigate}
      />

      {renderBody()}
    </>
  )
}
