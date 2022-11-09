import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPageFondo from '../../media/LandingPageFondo.jpeg'
import negroOasis from '../../media/negroOasis.png'
import videoOasis from '../../media/videoOasis.mp4'
import OasisRent from '../../media/OasisRent.png'

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
       
        {/* <div class='reseña'> 
          <img src={OasisRent} class='img-fluid' alt='...' style={{height:'300px'}} />
        </div> */}
        {/* <video class='video-nuevo'>
        <source src={videoOasis} alt='logo' class='position-absolute start-50 top-0'/>
        </video> */}
     
     
        <Footer />
    </div>
  )
}

export default LandingPage



















 {/* <div className='homeContainer'>
        <div className='contenedorImagen'>
        </div>
        <div class='btn-group'>
          <Link to={'/home'}>
            <button type="button" className="btn btn-dark">INICIO</button>
          </Link>
          <Link to={'/aboutUs'}>
            <button type="button" className="btn btn-dark">SOBRE NOSOTROS</button>
          </Link>
          <Link to={'/legal'}>
            <button type="button" className="btn btn-dark">LEGAL</button>
          </Link>
        </div>
      </div> */}