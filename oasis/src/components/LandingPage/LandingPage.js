import React from 'react'
import './LandingPage.css'
import homeVideo from '../../media/homeVideo.mp4'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className='homeContainer'>
        <video className='video' src={homeVideo} autoPlay loop muted />
        <h1>OASIS</h1>
        <p>ALQUILER DE AUTOS EN MENDOZA</p>
        <div>
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