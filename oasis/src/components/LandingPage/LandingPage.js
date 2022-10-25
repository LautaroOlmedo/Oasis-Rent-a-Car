import React from 'react'
import './LandingPage.css'
import homeVideo from '../../media/homeVideo.mp4'
import Footer from '../Footer/Footer'

function LandingPage() {
  return (
    <>
      <div className='homeContainer'>
        <video className='video' src={homeVideo} autoPlay loop muted />
        <h1>OASIS</h1>
        <p>ALQUILER DE AUTOS EN MENDOZA</p>
        <div>
        <button>HOME</button>
        <button>LEGAL</button>
        <button>HOME</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage