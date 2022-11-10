import React from "react";

import { Map } from "leaflet";
import './Maps.css'
import 'leaflet/dist/leaflet.css'
export default function Maps(){
    return(
      <Map center={{lat: '51.234', lng: '13.254'}} zoom={8}></Map>
    )

}