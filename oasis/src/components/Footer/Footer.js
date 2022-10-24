import React from 'react'
import './Footer.css'
import blancoOasis from '../../media/blancoOasis.png'

function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <img className='logo' src={blancoOasis} alt="logo" />
      </div>
    </>
  )
}

export default Footer