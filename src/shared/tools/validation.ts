import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { ZodRawShape, z } from 'zod'

export type TSchema<TSchemaType extends z.ZodTypeAny> = z.infer<TSchemaType>

export const getSchemas = (t: TFunction) => ({
  phone: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 1 }))
    .refine(item => isValidPhoneNumber(item), {
      message: t('validation.phone'),
    }),
  email: z
    .string({
      required_error: t('validation.required'),
    })
    .email({ message: t('validation.email') })
    .optional(),

  optionalString: z.string().optional().or(z.literal('')),
  requiredString: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 1 })),
  requiredNumber: z
    .number({
      required_error: t('validation.required'),
    })
    .min(0, t('validation.min', { value: 0 })),

  code: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 6 })),
})

export const validationSchema = (
  cb: (schemas: ReturnType<typeof getSchemas>, t: TFunction) => ZodRawShape,
) => {
  return (t: TFunction) => {
    const schemas = getSchemas(t)
    const schema = cb(schemas, t)

    return zodResolver(z.object(schema))
  }
}
