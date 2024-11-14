import { EAuthMethod } from '@/shared/lib'

export type TUser = {
  name: string
  surname: string
  email?: string
  phone?: string
  authMethod: EAuthMethod
}
