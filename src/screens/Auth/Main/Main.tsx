import React from 'react'

import { Text, View, Image } from 'react-native'

import { useTranslation } from 'react-i18next'

import { Png } from '@assets/png'

import { UserFeature } from '@/features/user'

import { EColors } from '@/shared/lib'
import { Background } from '@/shared/ui/background'

import { Typography } from '@/shared/ui/styled'

import { BottomLinks, Container, styles } from './styles'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <>
      <Background.Standard
        statusBarStyle={'dark-content'}
        avoidScrollBar
        style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={Png.AuthMain}
        />

        <Container>
          <Typography.H1>{t('auth_main.title_line_1')}</Typography.H1>

          <Typography.Body2R mTop="12px" mBottom="20px">
            {t('auth_main.title_line_2')}
          </Typography.Body2R>

          <UserFeature.FirebaseAuth />
        </Container>

        {/* <UserFeature.FirebaseAuth /> */}
      </Background.Standard>

      {/* <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
        }}>
        <Text>Auth Main</Text>
      </View> */}
    </>
  )
}
