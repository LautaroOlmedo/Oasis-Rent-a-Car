import React from 'react'
import './Footer.css'
// import instagram from '../../media/instagram.png'
// import twitter from '../../media/twitter.png'
// import whatsapp from '../../media/whatsapp.png'
// import facebook from '../../media/facebook.png'
// import blancoOasis from '../../media/blancoOasis.png'

function Footer() {
  return (
    <>
      <footer className='footerContainer'>
        <div className="footerInfo">
          <h1>OASIS</h1>
          <p>Alquiler de autos texto texto texto</p>
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
              <i>instagram</i>
            </a>
            <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
              <i>facebook</i>
            </a>
            <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
              <i>twitter</i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5492610000000" target="_blank" rel='noreferrer'>
              <i>whatsapp</i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer