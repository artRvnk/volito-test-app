import Geolocation from 'react-native-geolocation-service'

import { TUser } from '../models'

export type TInitialState = {
  user: TUser | null
  location: Geolocation.GeoCoordinates | null

  loading: boolean
}
