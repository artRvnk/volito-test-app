import { TFunction } from 'i18next'
import { z } from 'zod'

import { getSchemas } from '@/shared/tools'

export const signUpValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    name: schemas.requiredString,
    surname: schemas.requiredString,
    email: schemas.optionalString,
  })
}
