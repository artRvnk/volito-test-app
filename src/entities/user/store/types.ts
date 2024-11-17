import Geolocation from 'react-native-geolocation-service'

import { TCoordinates } from '@/entities/note'

import { TUser } from '../models'

export type TInitialState = {
  user: TUser | null
  // location: Geolocation.GeoCoordinates | null
  location: TCoordinates | null

  loading: boolean
}
