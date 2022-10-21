import React from 'react'
import './NavBar.css'
import blancoOasis from '../../media/blancoOasis.png'

function NavBar() {
  return (
    <>
      <div className='navbar'>
        <img className='navbar-logo' src={blancoOasis} alt="logo" />
      </div>
    </>
  )
}

export default NavBar