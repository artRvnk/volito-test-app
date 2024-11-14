import React from 'react'
import { Button, Text, View } from 'react-native'

import { useDispatch } from 'react-redux'

import { userActions } from '@/entities/user'

export const Main = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(userActions.clearUser())
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text>Notes Main</Text>

      <Button title="Log out" onPress={logOut} />
    </View>
  )
}
