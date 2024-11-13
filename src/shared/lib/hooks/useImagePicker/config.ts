import { Options } from 'react-native-image-crop-picker'

import { EColors } from '../../constants'

export enum EImageType {
  Camera = 'Camera',
  Picker = 'Picker',
}

export const maxSizeMB = 5

export const cropperConfig: Options = {
  compressImageQuality: 1,
  freeStyleCropEnabled: true,
  cropperToolbarColor: EColors.neutral_500,
  cropperToolbarWidgetColor: EColors.white,
  cropperStatusBarColor: EColors.neutral_500,
  cropperActiveWidgetColor: EColors.primary_400,
}
