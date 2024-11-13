import React, { useEffect, useRef, useState } from 'react'
import { EmitterSubscription, Keyboard, Platform } from 'react-native'

export const useKeyboardStatus = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0)

  const keyboardHideListener = useRef<null | EmitterSubscription>(null)
  const keyboardShowListener = useRef<null | EmitterSubscription>(null)

  const onKeyboardShow = (e: {
    endCoordinates: { height: React.SetStateAction<number> }
  }) => {
    setKeyboardHeight(e.endCoordinates.height)
    setOpen(true)
  }

  const onKeyboardHide = () => {
    setKeyboardHeight(0)
    setOpen(false)
  }

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    )

    keyboardHideListener.current = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    )

    return () => {
      keyboardShowListener.current?.remove()
      keyboardHideListener.current?.remove()
    }
  }, [])

  return {
    isOpen,
    keyboardHeight: keyboardHeight,
    keyboardPlatform: Platform.OS,
  }
}
