import React, { ReactNode } from 'react'

import * as C from './list'
import { GestureView } from './styles'

type TContext = {
  children: ReactNode
}

export const Context = ({ children }: TContext) => {
  return (
    <GestureView>
      <C.SafeAreaWrapper>
        <C.GeolocationProvider>
          <C.LanguageProvider>
            <C.ToastProvider>
              <C.LoaderProvider>{children}</C.LoaderProvider>
            </C.ToastProvider>
          </C.LanguageProvider>
        </C.GeolocationProvider>
      </C.SafeAreaWrapper>
    </GestureView>
  )
}
