import React, { useState, useCallback, FC, createElement } from 'react'
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native'

import { useTranslation } from 'react-i18next'

import { EColors } from '@/shared/lib'

import { Typography } from '../styled'

import * as S from './styles'
import { TViewMoreProps } from './types'

export const ViewMore: FC<TViewMoreProps> = ({
  text,
  linesCount,
  fontKey = 'Body2R',
  ...props
}) => {
  const { t } = useTranslation()

  const fullTextHeight: number | null = null
  let trimmedTextHeight: number | null = null

  const [isShown, setShown] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(true)
  const [linesNumber, setLinesNumber] = useState<number | null>(linesCount)

  const hideFullText = useCallback(() => {
    if (trimmedTextHeight && fullTextHeight) {
      setShowMore(trimmedTextHeight < fullTextHeight)
    }
  }, [trimmedTextHeight, fullTextHeight])

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    trimmedTextHeight = height
    hideFullText()
  }

  const onPressMore = () => {
    setLinesNumber(null)
  }

  const onPressLess = () => {
    setLinesNumber(linesCount)
  }

  const renderBtnText = (value: string) => {
    if (value.endsWith('R')) {
      return (value.slice(0, -1) + 'SB') as keyof typeof Typography
    }

    return value as keyof typeof Typography
  }

  const renderViewMore = useCallback(
    () => (
      <>
        {createElement(Typography[renderBtnText(fontKey)], {
          onPress: onPressMore,
          children: t('button.show_more'),
          color: EColors.primary_400,
        })}
      </>
    ),
    [onPressMore],
  )

  const renderViewLess = useCallback(
    () => (
      <>
        {createElement(Typography[renderBtnText(fontKey)], {
          onPress: onPressLess,
          children: t('button.show_less'),
          color: EColors.primary_400,
        })}
      </>
    ),
    [onPressLess],
  )

  const renderButtons = () => {
    if (showMore) {
      if (linesNumber && linesNumber > 0) {
        return renderViewMore()
      }

      return renderViewLess()
    }
    return null
  }

  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    setShown(e.nativeEvent.lines.length >= linesCount)
  }

  return (
    <S.Container {...props} onLayout={onLayout}>
      {createElement(Typography[fontKey], {
        color: EColors.white,
        numberOfLines: linesNumber as number,
        onTextLayout: onTextLayout,
        children: text,
      })}

      {isShown && renderButtons()}
    </S.Container>
  )
}
