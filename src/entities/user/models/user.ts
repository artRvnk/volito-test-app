import { EAuthMethod } from '@/shared/lib'

export type TUser = {
  id: string
  name: string
  surname: string
  email: string
  phone?: string
  authMethod: EAuthMethod
}
