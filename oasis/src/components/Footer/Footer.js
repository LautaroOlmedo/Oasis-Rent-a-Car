import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import instagram from '../../media/instagram.png'
// import twitter from '../../media/twitter.png'
// import whatsapp from '../../media/whatsapp.png'
// import facebook from '../../media/facebook.png'
// import blancoOasis from '../../media/blancoOasis.png'

function Footer() {
  return (
<footer className='row p-5 bg-black mt-5 justify-content-around mx-0 position-relative fixed-bottom'>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
        </div>
        <div className='text-light text-center'>
          <h5 className='text-uppercase font-weight-light'>
            Contactos
          </h5>
          <FontAwesomeIcon icon={['fas', 'phone-alt']} className='h2' style={{ color: 'DodgerBlue' }}/>
          <p>0800-1234-0000</p>
          <FontAwesomeIcon icon="fa-solid fa-envelope"className='h2' style={{ color: 'DodgerBlue' }}/>
          <p>oasis@gmail.com</p>
        </div>
      </div>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
        </div>
        <div className='text-light text-center'>
          <h5 className='text-uppercase font-weight-light'>
            Horarios de atención
            <FontAwesomeIcon icon={['fas', 'clock']} className='h2 mt-3' style={{ color: 'DodgerBlue' }}/>
          </h5>
          <p>Lunes a viernes de 9hs a 20hs</p>
          <p>Sábados de 10hs a 14hs</p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <h5 className='text-uppercase font-weight-light text-light mb-3'>
        Siguenos en las redes
        </h5>
        <div className=''>
          <FontAwesomeIcon icon={'fa-brands fa-facebook'} className='h2 me-4' style={{ color: 'DodgerBlue' }}/>
          <FontAwesomeIcon icon={"fa-brands fa-twitter" } className='h2 me-4' style={{ color: 'DodgerBlue' }}/>
          <FontAwesomeIcon icon={'fa-brands fa-instagram'} className='h2' style={{ color: 'DodgerBlue' }}
          />
        </div>
      </div>
      <div>
      <p class="text-center text-muted text-light">Copyright © 2022 </p>
      </div>
    </footer>
  )







  //   <>
  //     <footer className='row p-5 bg-dark mt-5 justify-content-around mx-0 position-relative fixed-bottom'>
  //       <div className="col-md-3 d-flex text-white">
  //         <h1>OASIS</h1>
  //         <p>Alquiler de autos texto texto texto</p>
  //       </div>
  //       <div className="text-white">
  //         <h3>Contactos</h3>
  //         <p>numero mail paginaWeb direccion</p>
  //       </div>
  //       <div className='text-white'>
  //         <div className=''>

  //         </div>
  //         <div className='text-white'>
  //           <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
  //             <i>instagram</i>
  //           </a>
  //           <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
  //             <i>facebook</i>
  //           </a>
  //           <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
  //             <i>twitter</i>
  //           </a>
  //           <a href="https://api.whatsapp.com/send?phone=+5492610000000" target="_blank" rel='noreferrer'>
  //             <i>whatsapp</i>
  //           </a>
  //         </div>
  //       </div>
  //     </footer>
  //   </>
  // )
}

export default Footer