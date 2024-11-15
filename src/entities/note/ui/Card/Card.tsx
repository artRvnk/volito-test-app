import React from 'react'

import { Text } from 'react-native'

import { TNote } from '../../models'

import { Container } from './styles'

export const Card = ({ item, index }: { item: TNote }) => {
  return (
    <>
      <Container>
        <Text>{index}: </Text>
        <Text>{new Date(item.createdAt).toISOString()}</Text>
      </Container>
    </>
  )
}
