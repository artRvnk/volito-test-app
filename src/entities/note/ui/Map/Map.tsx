import React from 'react'

import { StyleSheet, View } from 'react-native'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { TCoordinates } from '@/entities/note'

type TMapProps = {
  location: TCoordinates
}

export const Map = ({ location }: TMapProps) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,

          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="standard">
        <Marker coordinate={location} pinColor={'pink'} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
  },
  map: { width: '100%', height: 200 },
})
