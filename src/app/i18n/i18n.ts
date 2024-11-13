import { Platform, NativeModules } from 'react-native'

import i18n, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next'
import { initReactI18next } from 'react-i18next'

import { isIos } from '@/shared/tools'

import { en } from './languages'
import { ELanguage } from './types'

const DEFAULT_LANG = ELanguage.en

const getDeviceLang = () => {
  const appLanguage = isIos
    ? NativeModules.SettingsManager?.settings?.AppleLocale ||
      NativeModules.SettingsManager?.settings?.AppleLanguages?.[0] ||
      DEFAULT_LANG
    : NativeModules.I18nManager?.localeIdentifier || DEFAULT_LANG

  return appLanguage.slice(0, 2)
}

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {},
  detect: callback => {
    const deviceLang = getDeviceLang()
    // const deviceLang = LanguageService.getDeviceLang()

    let lang = deviceLang

    if (!Object.keys(resources).includes(lang)) {
      lang = DEFAULT_LANG
    }

    callback(lang)
  },
  cacheUserLanguage: async () => {},
}
export const defaultNS = DEFAULT_LANG
export const resources = {
  en: { translation: en },
}

i18n.use(initReactI18next).use(languageDetector).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: DEFAULT_LANG,
})

export default i18n
