export type TCreateForm = {
  title: string
  description: string
  image: string
}

export type TCreateReturn = TCreateForm

export type TCreateProps = {
  onSubmit: (val: TCreateForm) => void
}
