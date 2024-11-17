export type TNote = {
  _id: string

  id: string
  title: string
  description: string
  image: string | null
  date: string
  location: TCoordinates

  owner: string

  createdAt: string
  updatedAt: string
}

export type TCoordinates = {
  latitude: number
  longitude: number
}
