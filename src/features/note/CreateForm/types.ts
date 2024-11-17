import { TNote } from '@/entities/note'

export type TCreateForm = {
  title: string
  description: string
  image: string
  date: string
}

export type TCreateReturn = TCreateForm

export type TCreateProps = {
  note?: TNote
  image?: string
  onSubmit: (val: TCreateForm) => void
}
