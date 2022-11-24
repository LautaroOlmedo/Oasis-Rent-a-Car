import React, {useContext} from 'react'
import './Cards.css'
import Car from '../Car/Car'
import {langContext} from '../../context/lanContext'


function Cards() {
  let idioma = useContext(langContext)


  return (
    
    <div>
      <Car/>
    </div>
  )
}

export default Cards