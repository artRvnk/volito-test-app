import React from 'react'
import { createContext, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'

import {
  Edge,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'

import { TChildrenContext } from '../types'

import { TBackgroundColor, TStatusBarContext } from './types'

const DEFAULT_COLOR = EColors.white
// const DEFAULT_EDGES: Edge[] = ['bottom']
const DEFAULT_EDGES: Edge[] = []

export const SafeAreaContext = createContext<TStatusBarContext>({
  backgroundColor: DEFAULT_COLOR,
  setBackgroundColor: () => {},
  edges: DEFAULT_EDGES,
  setEdges: () => {},
})

export const SafeAreaWrapper = ({ children }: TChildrenContext) => {
  const [backgroundColor, setBackgroundColor] =
    useState<TBackgroundColor>(DEFAULT_COLOR)

  const [edges, setEdges] = useState<Edge[]>(DEFAULT_EDGES)

  const value = useMemo(
    () => ({ backgroundColor, setBackgroundColor, setEdges, edges }),
    [backgroundColor, edges],
  )

  return (
    <SafeAreaProvider>
      <SafeAreaContext.Provider value={value}>
        <SafeAreaView
          style={[
            styles.safeAreaView,
            {
              backgroundColor,
            },
          ]}
          edges={edges}>
          {children}
        </SafeAreaView>
      </SafeAreaContext.Provider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
})
