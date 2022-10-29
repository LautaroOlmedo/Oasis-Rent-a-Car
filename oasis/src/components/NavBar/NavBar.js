import React from 'react'
import './NavBar.css'
import negroOasis from '../../media/negroOasis.png'
import AboutUs from '../AboutUs/AboutUs'
import Contacts from '../Contacts/Contacts'
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
        <ul className="menu">
          <li className="menuItem">
            <Link to={'/home/contacts'}>
              <a href={<Contacts />}>
                CONTACTO
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/home/aboutUs'}>
              <a href={<AboutUs />} >
                SOBRE NOSOTROS
              </a>
            </Link>
          </li>
          <li className="menuItem">
            <Link to={'/home/questions'}>
              <a href={<Questions />}>
                PREGUNTAS FRECUENTES
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar