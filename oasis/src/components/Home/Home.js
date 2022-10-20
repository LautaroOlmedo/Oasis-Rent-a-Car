import React from 'react'
import './Home.css'
import homeVideo from '../../media/homeVideo.mp4'

function Home() {
  return (
    <div className='homeContainer'>
      <video className='video' src={homeVideo} autoPlay loop muted />
    </div>
  )
}

export default Home