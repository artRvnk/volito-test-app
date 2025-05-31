import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { useTranslation } from 'react-i18next'
import ModalView from 'react-native-modal'

import { ELanguage } from '@/app/i18n'

import { EColors } from '@/shared/lib'
import { LanguageService } from '@/shared/services'
import { HP } from '@/shared/tools'
import { Typography } from '@/shared/ui/styled'

import { Styles } from './styles'

interface LanguageProps {
  isVisible: boolean
  onClose: () => void
}

export const Language: React.FC<LanguageProps> = ({ isVisible, onClose }) => {
  const { t } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState<ELanguage>(
    ELanguage.uk,
  )

  useEffect(() => {
    if (isVisible) {
      loadCurrentLanguage()
    }
  }, [isVisible])

  const loadCurrentLanguage = async () => {
    try {
      const language = await LanguageService.getLanguage()
      setCurrentLanguage(language)
    } catch (error) {
      console.error('Failed to load current language:', error)
    }
  }

  const handleLanguageChange = async (language: ELanguage) => {
    if (language === currentLanguage) {
      onClose()
      return
    }

    try {
      await LanguageService.setLanguage(language)
      setCurrentLanguage(language)

      setTimeout(() => {
        onClose()
      }, 300)
    } catch (error) {
      console.error('Failed to change language:', error)
    }
  }

  const getLanguageLabel = (lang: ELanguage) => {
    switch (lang) {
      case ELanguage.en:
        return 'English'
      case ELanguage.uk:
        return 'Українська'
      default:
        return lang
    }
  }

  const getLanguageSubtitle = (lang: ELanguage) => {
    switch (lang) {
      case ELanguage.en:
        return 'English'
      case ELanguage.uk:
        return 'Ukrainian'
      default:
        return ''
    }
  }

  const languages = [ELanguage.uk, ELanguage.en]

  return (
    <ModalView
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.75}
      statusBarTranslucent={true}
      deviceHeight={HP(120)}
      useNativeDriver
      backdropColor={EColors.black}>
      <Styles.Container>
        <Styles.Modal>
          <Typography.H2 color={EColors.white} align="center">
            {t('choose_language')}
          </Typography.H2>

          <Styles.ButtonContainer>
            {languages.map(language => {
              return (
                <Styles.LanguageButton
                  isSelected={currentLanguage === language}
                  onPress={() => handleLanguageChange(language)}
                  activeOpacity={0.8}>
                  <View>
                    <Typography.Body1SB
                      color={
                        currentLanguage === language
                          ? EColors.primary_500
                          : EColors.white
                      }>
                      {getLanguageLabel(language)}
                    </Typography.Body1SB>
                    <Typography.Body2R
                      color={
                        currentLanguage === language
                          ? EColors.primary_400
                          : EColors.neutral_200
                      }
                      mTop="2px">
                      {getLanguageSubtitle(language)}
                    </Typography.Body2R>
                  </View>
                  {currentLanguage === language && (
                    <Styles.CheckmarkContainer>
                      <Typography.CaptionR color={EColors.white}>
                        ✓
                      </Typography.CaptionR>
                    </Styles.CheckmarkContainer>
                  )}
                </Styles.LanguageButton>
              )
            })}
          </Styles.ButtonContainer>

          <Styles.CloseButton onPress={onClose} activeOpacity={0.8}>
            <Typography.Body1SB color={EColors.neutral_200}>
              {t('button.cancel')}
            </Typography.Body1SB>
          </Styles.CloseButton>
        </Styles.Modal>
      </Styles.Container>
    </ModalView>
  )
}
