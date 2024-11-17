import React, { useEffect } from 'react'
import { View, Button, Image } from 'react-native'

import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'

export const Main = () => {
  const reference = storage().ref('black-t-shirt-sm.png')
  console.log('reference', reference)

  // console.log(utils.FilePath.PICTURES_DIRECTORY)

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`
          console.log('pathToFile', pathToFile)

          // uploads file
          const response = await reference.putFile(pathToFile)
          console.log('response', response)
        }}
        title="ddd"
      />
    </View>
  )
}
