import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { EColors, useNavigation } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { FlexWrapper, Row, Typography } from '@/shared/ui/styled'

import { Container } from '../Container'

import { TStandardProps } from './types'

export const Standard = ({
  title = '',
  canGoBack = true,
  icon,
  iconProps = {},
  onPress,
  icons,
}: TStandardProps) => {
  const { goBack } = useNavigation()

  const renderIcons = () => {
    if (!!icon) {
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Icon name={icon} {...iconProps} />
        </TouchableOpacity>
      )
    }

    if (!!icons && !!icons.length) {
      return (
        <Row>
          {icons.map((iconConfig, index) => (
            <TouchableOpacity
              key={`${iconConfig.name}-${index}`}
              onPress={iconConfig.onPress}
              activeOpacity={0.7}
              style={index > 0 ? styles.iconSpacing : undefined}>
              <Icon name={iconConfig.name} {...iconConfig.props} />
            </TouchableOpacity>
          ))}
        </Row>
      )
    }

    return null
  }

  return (
    <>
      <Container>
        <FlexWrapper
          height={'100%'}
          style={styles.main}
          justify={'space-between'}>
          <FlexWrapper width={'auto'}>
            {canGoBack && (
              <TouchableOpacity style={styles.touch} onPress={goBack}>
                <Icon
                  size={15}
                  fill={EColors.white}
                  stroke={EColors.white}
                  name={'ChevronLeft'}
                />
              </TouchableOpacity>
            )}

            <Typography.H3 mLeft={canGoBack ? '10px' : '0px'} numberOfLines={1}>
              {title}
            </Typography.H3>
          </FlexWrapper>

          {renderIcons()}
        </FlexWrapper>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
  touch: {
    padding: 5,
  },
  iconSpacing: {
    marginLeft: 10,
  },
})
