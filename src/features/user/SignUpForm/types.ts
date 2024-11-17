import { TUser } from '@/entities/user'

export type TSignUpForm = {
  name: string
  surname: string
  email: string
}

export type TSignUpReturn = TSignUpForm

export type TSignUpProps = {
  data?: TUser
  onSubmit: (val: TSignUpReturn) => void
}
