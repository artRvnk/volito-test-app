import React, { useRef } from 'react'

import { StatusBar, StyleSheet, View } from 'react-native'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { getNoteSelector, TCoordinates } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import darkModeStyle from './config'

type TMapProps = {
  location: TCoordinates
}

export const Main = () => {
  const dispatch = useDispatch()

  const mapRef = useRef<MapView>(null)

  const { location } = useTypedSelector(getUserSelector)

  const { notes } = useTypedSelector(getNoteSelector)
  console.log('notes', notes)

  return (
    <>
      {/* <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      /> */}

      <MapView
        userInterfaceStyle="dark"
        // customMapStyle={darkModeStyle}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        ref={mapRef}
        initialRegion={{
          latitude: 50.904996,
          longitude: 34.816961,

          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="standard">
        {notes.map(note => {
          if (!note.location) return <></>

          return (
            <Marker
              key={note._id}
              coordinate={{
                latitude: note.location.latitude,
                longitude: note.location.longitude,
              }}
              title={note.title}
              description={note.description}
              pinColor="blue"
            />
          )
        })}
      </MapView>
    </>
  )
}
