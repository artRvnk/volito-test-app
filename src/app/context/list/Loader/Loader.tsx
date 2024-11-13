import React, { useState, createContext } from 'react'

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
      {isLoading && <Modal.Loader />}
      {children}
    </LoaderContext.Provider>
  )
}
