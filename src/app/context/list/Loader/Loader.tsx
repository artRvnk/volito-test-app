import React, { useState, createContext } from 'react'
import { View, StyleSheet } from 'react-native'

import { Modal } from '@/shared/ui/modal'

import { TChildrenContext } from '../types'

import { TLoader } from './types'

export const LoaderContext = createContext<TLoader>({
  setLoading: () => {},
  isLoading: false,
})

export const LoaderProvider = ({ children }: TChildrenContext) => {
  const [isLoading, setLoading] = useState<boolean>(false)

  return (
    <LoaderContext.Provider value={{ setLoading, isLoading }}>
      {children}

      <View style={styles.loader}>{isLoading && <Modal.Loader />}</View>
    </LoaderContext.Provider>
  )
}

const styles = StyleSheet.create({
  loader: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
