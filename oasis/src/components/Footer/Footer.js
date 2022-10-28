import React from 'react'
import './Footer.css'
// import blancoOasis from '../../media/blancoOasis.png'

function Footer() {
  return (
    <>
      <footer className='footerContainer'>
        <div className="footerInfo">
          <h1>OASIS</h1>
          <p>Ciudad</p>
        </div>
        <div className="footerContact">
          <h3>Contactos</h3>
          <p>numero mail paginaWeb direccion</p>
        </div>
        <div className='footerMedia'>
          <div className=''>

          </div>
          <div className='footerLinks'>
            <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
              <i>Instagram</i>
            </a>
            <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
              <i>Facebook</i>
            </a>
            <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
              <i>Twitter</i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer