import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPageFondo from '../../media/LandingPageFondo.jpeg'
import negroOasis from '../../media/negroOasis.png'
import { langContext } from '../../context/lanContext'

function LandingPage() {
  console.log(langContext)
  return (
    
    <>
    <NavBar/>
    {/* <img class='video' src={LandingPageFondo} alt="logo" /> */}
    <div class='img-fluid d-flex'>
      <div class='video'>
    </div>
    

    </div>
        <div class='img-fluid d-flex'> 
         <img src={negroOasis} alt="logo" />
        </div>
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
      <Footer />
    </>
  )
}

export default LandingPage