import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPageFondo from '../../media/LandingPageFondo.jpeg'
import negroOasis from '../../media/negroOasis.png'
import OasisRent from '../../media/OasisRent.png'

import { langContext } from '../../context/lanContext'

function LandingPage() {
  console.log(langContext)
  return (
    <div>
    <NavBar/>

    <div class=''>
      <div class='video'>
      </div>
    </div>
        <div class='logo'> 
         <img src={negroOasis} class='img-fluid' alt="logo" style= {{ height: '417px' }} />
        </div>
        <div class='reseña'> 
          <img src={OasisRent} class='img-fluid' alt='...' style={{height:'300px'}} />
        </div>
        {/* <video class='video-nuevo'>
        <source src={videoOasis} alt='logo' class='position-absolute start-50 top-0'/>
        </video> */}
     
     
        <Footer />
    </div>
  )
}

export default LandingPage



















 