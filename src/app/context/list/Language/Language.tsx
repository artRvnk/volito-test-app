import React, { createContext, useEffect, useMemo, useState } from 'react'

import { I18nextProvider } from 'react-i18next'

import { i18n } from '@/app/i18n'

import { LanguageService } from '@/shared/services'

import { TChildrenContext } from '../types'

import { TLanguageProvider } from './types'

export const LanguageContext = createContext<TLanguageProvider>({
  language: LanguageService.DEFAULT_LANGUAGE,
  setLanguage: () => {},
})

export const LanguageProvider = ({ children }: TChildrenContext) => {
  const [language, setLanguage] = useState(LanguageService.DEFAULT_LANGUAGE)

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  )

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const appLanguage = await LanguageService.getLanguage()
      if (appLanguage === language) return

      LanguageService.setLanguage(language)
    })()
  }, [language])

  useEffect(() => {
    LanguageService.getLanguage().then(lang => {
      lang && setLanguage(lang)
    })
  }, [])

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <LanguageContext.Provider value={value}>
          {children}
        </LanguageContext.Provider>
      </I18nextProvider>
    </>
  )
}
