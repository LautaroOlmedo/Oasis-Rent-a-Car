import React from 'react'
import './NavBar.css'
import negroOasis from '../../media/negroOasis.png'
import AboutUs from '../AboutUs/AboutUs'
import { Link } from 'react-router-dom'
import Questions from '../Questions/Questions'

function NavBar() {
  return (
    <>
    <div className='container'>
      <div className="wrapper">
        <div className="logoContainer">
          <img src={negroOasis} alt="logo" />
        </div>
        <div className="menu">
          <p className="menuItem a">
            WHATSAPP
            <p>
            +54 (9) 2610000000
            </p>
          </p>
          <p className='menuItem b'>
            <Link to={'/home/aboutUs'}>
              <a href={<AboutUs />} >
                SOBRE NOSOTROS
              </a>
            </Link>
          </p>
          <p className="menuItem c">
            <Link to={'/home/questions'}>
              <a href={<Questions />}>
                PREGUNTAS FRECUENTES
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar