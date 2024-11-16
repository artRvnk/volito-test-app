import React, { createContext, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { captureException } from '@sentry/react-native'
import Geolocation from 'react-native-geolocation-service'
import {
  check,
  request,
  RESULTS,
  Permission,
  PERMISSIONS,
  openSettings,
  PermissionStatus,
} from 'react-native-permissions'
import { useDispatch } from 'react-redux'

import { userActions } from '@/entities/user/store'

import { TChildrenContext } from '../types'

import { TGeolocationProvider, TLocationContext } from './types'

const defaultLocation = {
  longitude: 0,
  latitude: 0,
}

export const GeolocationContext = createContext<TGeolocationProvider>({
  location: defaultLocation,
  isGranted: false,
  locationPermissionStatus: null,
  actions: {
    onGetLocation: () => {},
  },
})

export const GeolocationProvider = ({ children }: TChildrenContext) => {
  const dispatch = useDispatch()

  const [location, setLocation] = useState<TLocationContext>(defaultLocation)

  const [locationPermissionStatus, setLocationPermissionStatus] =
    useState<PermissionStatus | null>(null)

  const isGranted = locationPermissionStatus === 'granted'

  const requestPermissions = async () => {
    // console.log('Geolocation-requestPermissions')

    try {
      return request(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }) as Permission,
      )
    } catch (e) {
      captureException(e)
      return RESULTS.UNAVAILABLE
    }
  }

  const checkPermissions = async () => {
    try {
      return check(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }) as Permission,
      )
    } catch (e) {
      captureException(e)
      return RESULTS.UNAVAILABLE
    }
  }

  const onGetLocation = async (callback?: (data: TLocationContext) => void) => {
    Geolocation.getCurrentPosition(
      async position => {
        try {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })

          callback?.({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })

          console.log('Geolocation-latitude', position.coords.latitude)
          console.log('Geolocation-longitude', position.coords.longitude)

          dispatch(userActions.setLocation(position.coords))
        } catch (e) {
          captureException(e)
        }
      },
      e => {
        captureException(e)
      },
      {
        maximumAge: 10,
        timeout: 0,
        enableHighAccuracy: true,
        showLocationDialog: true,
      },
    )
  }

  const initGeolocation = async () => {
    // console.log('Geolocation-initGeolocation')

    const status = await checkPermissions()
    // console.log('Geolocation-initGeolocation-status', status)

    setLocationPermissionStatus(status)

    if (status === 'granted') {
      onGetLocation()
    } else {
      onRequest()
    }
  }

  useEffect(() => {
    // console.log('Geolocation-useEffect')
    initGeolocation()
  }, [])

  const onRequest = async () => {
    const status = await requestPermissions()
    // console.log('Geolocation-onRequest-status', status)

    setLocationPermissionStatus(status)

    if (status === 'blocked' || status === 'denied') {
      openSettings()
      return
    }

    if (status === 'granted') {
      onGetLocation()
    }
  }

  return (
    <>
      <GeolocationContext.Provider
        value={{
          location,
          isGranted,
          locationPermissionStatus,
          actions: {
            onGetLocation,
          },
        }}>
        {children}
      </GeolocationContext.Provider>
    </>
  )
}
