import React from 'react'
import { Image } from 'react-native'

import { useTranslation } from 'react-i18next'

import { Png } from '@assets/png'

import { UserFeature } from '@/features/user'

import { EColors } from '@/shared/lib'
import { Background } from '@/shared/ui/background'
import { Typography } from '@/shared/ui/styled'

import { Container, styles } from './styles'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <Background.Standard
      statusBarStyle={'dark-content'}
      avoidScrollBar
      style={styles.background}>
      <Image resizeMode="contain" style={styles.image} source={Png.AuthMain} />

      <Container>
        <Typography.H1 color={EColors.white}>
          {t('auth_main.title_line_1')}
        </Typography.H1>

        <Typography.Body2R mTop="12px" mBottom="20px" color={EColors.white}>
          {t('auth_main.title_line_2')}
        </Typography.Body2R>

        <UserFeature.FirebaseAuth />
      </Container>
    </Background.Standard>
  )
}
