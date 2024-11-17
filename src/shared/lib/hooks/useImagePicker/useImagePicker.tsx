import { Alert } from 'react-native'

import { useTranslation } from 'react-i18next'
import ImagePicker, { Options, Image } from 'react-native-image-crop-picker'

import { useToast } from '../useToast'

import { cropperConfig, maxSizeMB } from './config'

export const useImagePicker = () => {
  const { t } = useTranslation()

  const { callToast } = useToast()

  const onValidate = (data: Image) => {
    const sizeMB = data.size * 0.000001

    if (sizeMB > maxSizeMB) {
      callToast({ message: t('image_picker.image_size') })
      return false
    }

    return true
  }

  const openCamera = async (options: Partial<Options>) => {
    try {
      const isVideoOrAny =
        options.mediaType === 'video' || options.mediaType === 'any'

      const data = await ImagePicker.openCamera({
        mediaType: 'any',
        cropping: !isVideoOrAny,
        ...cropperConfig,
        ...options,
        cropperToolbarTitle: t('image_picker.edit_photo'),
      })

      const isValid = onValidate(data)

      if (isValid) return data

      return null
    } catch {
      return null
    }
  }

  const openPicker = async (options: Partial<Options>) => {
    try {
      const isVideoOrAny =
        options.mediaType === 'video' || options.mediaType === 'any'

      const data = await ImagePicker.openPicker({
        mediaType: 'any',
        cropping: !isVideoOrAny,
        ...cropperConfig,
        ...options,
        cropperToolbarTitle: t('image_picker.edit_photo'),
      })

      if (data.mime.startsWith('image/') && isVideoOrAny) {
        const croppedData = await ImagePicker.openCropper({
          ...cropperConfig,
          width: data?.width,
          height: data?.height,
          compressImageMaxHeight: data?.height,
          compressImageMaxWidth: data?.width,
          ...options,
          cropperToolbarTitle: t('image_picker.edit_photo'),
          path: data.path,
          multiple: false,
          mediaType: 'photo',
          compressImageQuality: 0.8,
        })

        const isValid = onValidate(croppedData)

        if (isValid) return croppedData

        return null
      }

      const isValid = onValidate(data)

      if (isValid) return data

      return null
    } catch {
      return null
    }
  }

  const onShowAlert = (options: Partial<Options>) =>
    new Promise((res: (data: Image | null) => void) => {
      Alert.alert(
        t('image_picker.title'),
        '',
        [
          {
            text: t('image_picker.camera'),
            onPress: async () => {
              const data = await openCamera(options)
              res(data)
            },
          },
          {
            text: t('image_picker.gallery'),
            onPress: async () => {
              const data = await openPicker(options)
              res(data)
            },
          },
          {
            text: t('button.cancel'),
            onPress: () => {
              res(null)
            },
            style: 'cancel',
          },
        ],
        { userInterfaceStyle: 'dark', cancelable: true },
      )
    })

  return { onShowAlert }
}
