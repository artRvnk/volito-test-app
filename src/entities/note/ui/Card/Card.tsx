import React from 'react'

import { Text } from 'react-native'

import { format, parseISO } from 'date-fns'

import { EColors } from '@/shared/lib'
import { Row, Typography } from '@/shared/ui/styled'

import { TNote } from '../../models'

import * as S from './styles'

export const Card = ({ item }: { item: TNote }) => {
  return (
    <>
      <S.Container>
        <Row justify="space-between" align="center" mBottom="4px">
          <Typography.Body1SB style={S.styles.text} numberOfLines={1}>
            {item.title}
          </Typography.Body1SB>

          <Typography.Body2R>
            {format(parseISO(item.createdAt), 'dd.MM.yyyy HH:mm')}
          </Typography.Body2R>
        </Row>

        <Typography.Body1R
          // style={S.styles.text}
          numberOfLines={2}>
          {item.text}
        </Typography.Body1R>
        {/* <Text>{index}: </Text>
        <Text>{new Date(item.createdAt).toISOString()}</Text> */}
      </S.Container>
    </>
  )
}
