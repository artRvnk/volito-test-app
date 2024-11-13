import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

export type TCallToast = {
  title?: string
  info?: boolean
  message: string
}

export const useToast = () => {
  const { t } = useTranslation()

  const callToast = ({ title, info, message }: TCallToast) => {
    if (!!info) {
      Toast.show({
        type: 'info',
        text2: message,
      })
      return
    }

    Toast.show({
      type: !!title ? 'success' : 'error',
      text1: title || t('error'),
      text2: message,
    })
  }

  return { callToast }
}
