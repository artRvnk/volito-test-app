import React, { ReactNode } from 'react'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import * as C from './list'
import { GestureView } from './styles'

type TContext = {
  children: ReactNode
}

export const Context = ({ children }: TContext) => {
  return (
    <GestureView>
      <C.SafeAreaWrapper>
        {/* <C.GeolocationProvider> */}
        <C.LanguageProvider>
          <C.ToastProvider>
            <C.LoaderProvider>
              <BottomSheetModalProvider>
                <>{children}</>
              </BottomSheetModalProvider>
            </C.LoaderProvider>
          </C.ToastProvider>
        </C.LanguageProvider>
        {/* </C.GeolocationProvider> */}
      </C.SafeAreaWrapper>
    </GestureView>
  )
}
