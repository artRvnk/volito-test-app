import React from 'react'

import { Svg } from '@assets/svg'

import { EColors } from '@/shared/lib'

import { Container } from './styles'
import { TIconProps } from './types'

export const Icon = ({
  name,
  fill,
  size = 24,
  height,
  width,
  style,
  stroke,
  strokeWidth,
  marginProps,
  ...props
}: TIconProps) => {
  const currentFill = fill || EColors.gray
  const IconSvg = Svg[name]

  return (
    <Container {...marginProps}>
      <IconSvg
        style={style}
        fill={currentFill}
        width={width ?? size}
        height={height ?? size}
        stroke={stroke && stroke}
        strokeWidth={strokeWidth && strokeWidth}
        {...{ props }}
      />
    </Container>
  )
}
