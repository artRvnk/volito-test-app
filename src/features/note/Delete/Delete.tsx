import React from 'react'
import { View } from 'react-native'

import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import Reanimated, { useAnimatedStyle } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'

import { noteActions } from '@/entities/note'

import { Icon } from '@/shared/ui'
import { FlexWrapper, Touchable } from '@/shared/ui/styled'

import { styles } from './styles'
import { TDeleteProps, TRightActionProps } from './types'

const RightAction = ({ prog, drag, onPress }: TRightActionProps) => {
  const styleAnimation = useAnimatedStyle(() => {
    // console.log('showRightProgress:', prog.value)
    // console.log('appliedTranslation:', drag.value)

    return {
      transform: [{ translateX: drag.value + 50 }],
    }
  })

  return (
    <Reanimated.View style={styleAnimation}>
      <View style={styles.deleteMask} />

      <Touchable onPress={onPress}>
        <FlexWrapper style={styles.delete}>
          <Icon
            name="Delete"
            size={20}
            fill="white"
            stroke="white"
            marginProps={{ mLeft: '6px' }}
          />
        </FlexWrapper>
      </Touchable>
    </Reanimated.View>
  )
}

export const Delete = ({ item, entity }: TDeleteProps) => {
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(noteActions.deleteNote(item._id))
  }

  return (
    <Touchable>
      <ReanimatedSwipeable
        overshootRight={false}
        containerStyle={styles.container}
        renderRightActions={(prog, drag) => (
          <RightAction {...{ prog, drag }} onPress={onDelete} />
        )}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}>
        {entity}
      </ReanimatedSwipeable>
    </Touchable>
  )
}
