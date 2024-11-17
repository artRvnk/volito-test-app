import { TFunction } from 'i18next'
import { z } from 'zod'

import { getSchemas } from '@/shared/tools'

export const createValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    title: schemas.requiredString,
    description: schemas.requiredString,
    image: schemas.requiredString,
    date: schemas.requiredString,
  })
}
