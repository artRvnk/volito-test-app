import { TNote } from '@/entities/note'

export type TSingleProps = {
  note: TNote
  image: string | null
  setImage: (val: string | null) => void
}
