import React from 'react'
import './LandingPage.css'
import homeVideo from '../../media/homeVideo.mp4'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import negroOasis from '../../media/negroOasis.png'

function LandingPage() {
  return (
    <>
      <div className='homeContainer'>
        <video className='video' src={homeVideo} autoPlay loop muted />
        <div className='contenedorImagen'>
          <img src={negroOasis} alt="imagen" />
        </div>
        <div className='contenedorBotones'>
          <Link to={'/home'}>
            <button type="button" class="btn btn-dark">INICIO</button>
          </Link>
          <Link to={'/aboutUs'}>
            <button type="button" class="btn btn-dark">SOBRE NOSOTROS</button>
          </Link>
          <Link to={'/legal'}>
            <button type="button" class="btn btn-dark">LEGAL</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage