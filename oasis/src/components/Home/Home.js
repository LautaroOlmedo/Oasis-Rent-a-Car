import React from 'react'
import './Home.css'
import homeVideo from '../../media/homeVideo.mp4'
// import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <div className='homeContainer'>
        <video className='video' src={homeVideo} autoPlay loop muted />
        <h1>OASIS</h1>
        <p>ALQUILER DE AUTOS EN MENDOZA</p>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home