import React from 'react'
import { StyleSheet } from 'react-native'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useDispatch } from 'react-redux'

import { EScreens, EStacks } from '@/app/navigation'
import { useTypedSelector } from '@/app/store'

import { getNoteSelector, noteActions } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import { useNavigation } from '@/shared/lib'

export const Main = () => {
  const dispatch = useDispatch()

  const { navigate } = useNavigation()

  const { location } = useTypedSelector(getUserSelector)

  // console.log('Map-location', location)

  const { notes } = useTypedSelector(getNoteSelector)

  const onNavigate = (noteId: string) => {
    dispatch(noteActions.setCurrentNote(noteId))
    navigate(EStacks.Notes, {
      screen: EScreens.NSingle,
      // initial: false,
    })
  }

  return (
    <>
      <MapView
        userInterfaceStyle="dark"
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          // TODO - add user location
          latitude: !!location ? Number(location.latitude) : 0,
          longitude: !!location ? Number(location?.longitude) : 0,

          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="standard">
        {notes.map(note => {
          if (!note.location) return <></>

          return (
            <Marker
              onPress={() => onNavigate(note._id)}
              key={note._id}
              coordinate={{
                latitude: note.location.latitude,
                longitude: note.location.longitude,
              }}
              title={note.title}
              pinColor={'pink'}
            />
          )
        })}
      </MapView>
    </>
  )
}
