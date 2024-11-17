import React, { useRef } from 'react'

// import MapView, { MapPressEvent, Marker } from 'react-native-maps'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { TCoordinates } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

type TMapProps = {
  location: TCoordinates
}
//

export const Map = ({ location }: TMapProps) => {
  const dispatch = useDispatch()

  const mapRef = useRef<MapView>(null)

  const { location: userLocation } = useTypedSelector(getUserSelector)

  return (
    <>
      {/* <MapView
        // style={{ width, height: height * 0.75 }}
        ref={mapRef}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="standard"
        showsUserLocation
        // onPress={(event: MapPressEvent) => {
        //   const { latitude, longitude } = event.nativeEvent.coordinate
        //   console.log(`event-Latitude: ${latitude}, Longitude: ${longitude}`)
        //   setMarkerCoords({
        //     latitude,
        //     longitude,
        //   })
        // }}

        //
      >
        {!!location && <Marker coordinate={location} />}
      </MapView> */}
    </>
  )
}
