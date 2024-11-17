import { Dispatch, SetStateAction } from 'react'

import { ELanguage } from '@/app/i18n/types'

export type TLanguageProvider = {
  language: ELanguage
  setLanguage: Dispatch<SetStateAction<ELanguage>>
}
