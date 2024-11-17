import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { EColors, useNavigation } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { FlexWrapper, Typography } from '@/shared/ui/styled'

import { Container } from '../Container'

import { TStandardProps } from './types'

export const Standard = ({
  title = '',
  canGoBack = true,
  icon,
  iconProps = {},
  onPress,
}: TStandardProps) => {
  const { goBack } = useNavigation()

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

          {icon && (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
              <Icon name={icon} {...iconProps} />
            </TouchableOpacity>
          )}
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
})
