import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPageFondo from '../../media/LandingPageFondo.jpeg'
import negroOasis from '../../media/negroOasis.png'
import OasisRent from '../../media/OasisRent.png'
import {FormattedMessage} from 'react-intl'

import { langContext } from '../../context/lanContext'

function LandingPage() {
  console.log(langContext)
  return (
    <div>
    <NavBar/>
    {/* <img class='video' src={LandingPageFondo} alt="logo" /> */}
    
      <div class='video'>
      </div>
    
        <div class='logo'> 
         <img src={negroOasis} class='img-fluid' alt="logo" style= {{ height: '417px' }} />
        </div>
        <div class="card" style={{width: '700px', background: null}}>
         <div class="card-body">
    
            <p class="card-text"><FormattedMessage id='landing.Description'/></p>
    
         </div>
        </div>
       
  
        <Footer />
    </div>
  )
}

export default LandingPage



















 