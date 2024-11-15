import { EAuthMethod } from '@/shared/lib'

export type TUser = {
  _id: string
  id: string
  name: string
  surname: string
  email: string
  phone?: string
  authMethod: EAuthMethod
}
