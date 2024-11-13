import { useEffect, useState } from 'react'

import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const TAB_HEIGHT = hp(8)
const HEIGHT_2 = hp(4)

export const useAnimatedTab = () => {
  const [visible, setVisible] = useState<boolean>(true)

  const x = useSharedValue(visible ? TAB_HEIGHT : -HEIGHT_2 * 0.01)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: x.value,
        },
      ],
      height: visible ? TAB_HEIGHT : 0,
    }
  }, [x.value, visible])

  useEffect(() => {
    if (visible) {
      x.value = withTiming(-HEIGHT_2 * 0.01)
      return
    }
    if (!visible) {
      x.value = withTiming(TAB_HEIGHT)

      return
    }
  }, [visible, x])

  return { animatedStyle, setVisible, visible }
}
