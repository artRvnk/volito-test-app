import React, { PropsWithChildren, createContext } from 'react'

import { useTranslation } from 'react-i18next'
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  InfoToast,
} from 'react-native-toast-message'

import { EColors } from '@/shared/lib'

import { styles } from './styles'

const ToastContext = createContext({})

export default ToastContext

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation()

  const toastConfig: ToastConfig = {
    success: props => (
      <BaseToast
        {...props}
        text1={props?.text1 ? t(props.text1 as never) : ''}
        text2={props?.text2 ? t(props.text2 as never) : ''}
        style={styles.successToast}
        contentContainerStyle={[
          styles.toastContainer,
          { backgroundColor: EColors.white },
        ]}
        text1Style={[styles.text, { color: EColors.black }]}
        text2Style={[styles.text, { color: EColors.black }]}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
      />
    ),

    error: props => (
      <ErrorToast
        {...props}
        text1={props?.text1 ? t(props.text1 as never) : ''}
        text2={props?.text2 ? t(props.text2 as never) : ''}
        style={styles.errorToast}
        contentContainerStyle={[
          styles.toastContainer,
          { backgroundColor: EColors.white },
        ]}
        text1Style={[styles.text, { color: EColors.black }]}
        text2Style={[styles.text, { color: EColors.black }]}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
      />
    ),

    info: props => (
      <InfoToast
        {...props}
        text2={props?.text2 ? t(props.text2 as never) : ''}
        style={styles.infoToast}
        contentContainerStyle={[
          styles.toastContainer,
          { backgroundColor: EColors.white },
        ]}
        text2Style={[styles.text, { color: EColors.black }]}
        text2NumberOfLines={2}
      />
    ),
  }

  return (
    <ToastContext.Provider value={{}}>
      {children}
      <Toast config={toastConfig} />
    </ToastContext.Provider>
  )
}
