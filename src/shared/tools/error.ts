import { captureException } from '@sentry/react-native'
import axios from 'axios'
import Toast from 'react-native-toast-message'

// TODO
import { TQueryErrorData, TQueryErrorDefaultData } from '@/shared/api'

export const axiosErrorHandler = (error: unknown): TQueryErrorDefaultData => {
  let errorMessage: string | undefined
  let errorCode: string | undefined
  let errorDetails: TQueryErrorData['error'] | undefined

  if (axios.isAxiosError(error) && error?.response) {
    const errorData = error.response.data as TQueryErrorData

    errorDetails = errorData?.error
    errorMessage = error.response?.statusText
    errorCode = error.response?.status?.toString()
  } else {
    errorMessage = String(error)
  }

  return {
    message: errorMessage,
    code: errorCode,
    details: errorDetails,
  }
}

export const handleError = (e: unknown) => {
  captureException(e)

  const error = axiosErrorHandler(e)

  if (error?.details) {
    const param = error.details.param
    Toast.show({
      type: 'error',
      text1: (param ? `${param}: ` : '') + error.details.name,
    })
  }
}
