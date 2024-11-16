import { ReactNode } from 'react'
import { PermissionStatus } from 'react-native-permissions'

export type TGeolocationProvider = {
  location: TLocationContext
  isGranted: boolean
  locationPermissionStatus: PermissionStatus | null
  actions: TGeolocationActions
}

export type TGeolocationProviderProps = {
  children: ReactNode
}

export type TLocationContext = {
  latitude: number
  longitude: number
}

export type TGeolocationActions = {
  onGetLocation: (callback?: (data: TLocationContext) => void) => void
}
