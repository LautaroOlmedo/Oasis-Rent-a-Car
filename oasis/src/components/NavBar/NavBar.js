import React from 'react'
import './NavBar.css'
import negroOasis from '../../media/negroOasis.png'

function NavBar() {
  return (
    <>
    <div className='container'>
      <div className="wrapper">
        <div className="logoContainer">
          <img src={negroOasis} alt="logo" />
        </div>
        <ul className="menu">
          <li className="menuItem">
            <a href="https://www.google.com/" className="menuItemLink">
              CONTACTO
            </a>
          </li>
          <li className="menuItem">
            <a href="https://www.google.com/" className="menuItemLink">
              SOBRE NOSOTROS
            </a>
          </li>
          <li className="menuItem">
            <a href="https://www.google.com/" className="menuItemLink">
              PREGUNTAS FRECUENTES
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar