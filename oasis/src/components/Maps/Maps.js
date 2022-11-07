import React from 'react'
import { useMemo } from 'react'
import './Maps.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Maps() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyD40DrOz-i3rJ-pvAmyMPYG-pt-FFd5L7A'
  })

  if(!isLoaded) return <div>Loading...</div>

  return (

    <div className='ubicacion'>
      <center><h2>NUESTRA UBICACION</h2></center>
      
      <Map />
    </div>
  )
}

function Map() {
  const center = useMemo(() => ({lat: -32.8903, lng: -68.8472}), [])

  return (
    <GoogleMap
      zoom={10}
      center={center} mapContainerClassName='map-container'
    >
      <Marker position={center} />
    </GoogleMap>)
}

export default Maps