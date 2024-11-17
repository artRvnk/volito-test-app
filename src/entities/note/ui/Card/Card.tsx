import React from 'react'

import { format, parseISO } from 'date-fns'

import { EScreens } from '@/app/navigation'

import { useNavigation } from '@/shared/lib'
import { Row, Typography, Touchable } from '@/shared/ui/styled'

import { TNote } from '../../models'

import * as S from './styles'

export const Card = ({ item }: { item: TNote }) => {
  const { navigate } = useNavigation()

  const onNavigate = () => {
    navigate(EScreens.NSingle, { item })
  }

  return (
    <>
      <Touchable onPress={onNavigate}>
        <S.Container>
          <Row justify="space-between" align="center" mBottom="4px">
            <Typography.Body1SB style={S.styles.text} numberOfLines={1}>
              {item.title}
            </Typography.Body1SB>

            <Typography.Body2R>
              {format(parseISO(item.createdAt), 'dd.MM.yyyy HH:mm')}
            </Typography.Body2R>
          </Row>

          <Typography.Body1R numberOfLines={2}>
            {item.description}
          </Typography.Body1R>
        </S.Container>
      </Touchable>
    </>
  )
}
