import { NativeModules } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'

import { ELanguage } from '@/app/i18n'

import { isIos } from '../tools'

export class LanguageService {
  private static KEY = 'language'
  private static storage = AsyncStorage

  public static DEFAULT_LANGUAGE = ELanguage.en

  private static getDeviceLang() {
    const appLanguage = isIos
      ? NativeModules.SettingsManager?.settings?.AppleLocale ||
        NativeModules.SettingsManager?.settings?.AppleLanguages?.[0] ||
        LanguageService.DEFAULT_LANGUAGE
      : NativeModules?.I18nManager?.localeIdentifier ||
        LanguageService.DEFAULT_LANGUAGE

    return appLanguage.slice(0, 2)
  }

  private static async getLocalStorageLanguage() {
    return this.storage.getItem(this.KEY)
  }

  // Get app language
  static async getLanguage(): Promise<ELanguage> {
    const localLanguage = await this.getLocalStorageLanguage()

    // If local storage lang set
    if (localLanguage) {
      return localLanguage as ELanguage
    }

    const deviceLang = this.getDeviceLang()

    // If device lang exist
    if (Object.values(LanguageService).includes(deviceLang)) {
      this.setLanguage(deviceLang)
      return deviceLang
    }

    return this.DEFAULT_LANGUAGE
  }

  static async setLanguage(lang: ELanguage) {
    i18next.changeLanguage(lang)

    return this.storage.setItem(this.KEY, lang)
  }
}
