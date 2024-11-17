import { useImperativeHandle, useRef, ForwardedRef } from 'react'

import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'

export const useModalRef = (ref: ForwardedRef<TBottomSheetModalRef>) => {
  const bottomSheetRef = useRef<TBottomSheetModalRef>(null)

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.open()
    },
    close: () => {
      bottomSheetRef.current?.close()
    },
  }))

  return bottomSheetRef
}
