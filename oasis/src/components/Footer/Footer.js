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

    <footer className='row p-5 pb-2 bg-black mt-5 justify-content-around mx-0 position-relative fixed-bottom'>
      <div className='col-md-3 text-center'>
        <div className='text-white'>
          <h5 className='text-uppercase font-weight-light text-white mb-3'>
            Atención al cliente
          </h5>
          <FontAwesomeIcon icon={['fas', 'phone-alt']} className='h2' style={{ color: '#11154B' }}/>
          <p>0800-1234-0000</p>
          <p>oasis@gmail.com</p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <div className='text-white'>
          <h5 className='text-uppercase font-weight-light text-white mb-3'>
            Horarios de atención
          </h5>
          <FontAwesomeIcon icon={['fas', 'clock']} className='h2' style={{ color: '#11154B' }}/>
          <p>Lunes a viernes de 9hs a 20hs</p>
          <p>Sábados de 10hs a 14hs</p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <h5 className='text-uppercase font-weight-light text-light mb-3'>
        Siguenos en las redes!
        </h5>
        <div className=''>
          <FontAwesomeIcon icon={'fa-brands fa-facebook'} className='h2 me-4' style={{ color: '#11154B' }}/>
          <FontAwesomeIcon icon={"fa-brands fa-twitter" } className='h2 me-4' style={{ color: '#11154B' }}/>
          <FontAwesomeIcon icon={'fa-brands fa-instagram'} className='h2' style={{ color: '#11154B' }}/>
        </div>
      </div>
      <div class='col-xs-12 pt-3'>
      <p class="text-center text-muted text-light">Copyright © 2022 Oasis.</p>
      </div>
      <hr/>
    </footer>

    // <div class='container-fluid'>
    //   <div class='row p-5 pb-2 bg-dark text-white '>
    //     <div class='col-lg-4 col-xs-12 col-md-6 '>
        
         
        
    //       <h4>Contactos</h4>
    //       <FontAwesomeIcon
    //         icon={['fas', 'phone-alt']}
    //         className='h2'
    //         style={{ color: 'DodgerBlue' }}
    //       />
    //       <p>0800-000-000</p>
    //       <p>oasis@gmail.com</p>
    //     </div>
    //     <div class='col-lg-4 col-xs-12 col-md-6'>
    //       <h4>Horarios de Atención</h4>
    //       <p>Lunes a viernes de 9hs a 20hs</p>
    //       <p>Sábados de 10hs a 14hs</p>
    //     </div>
    //     <div class='col-lg-4 col-xs-12 col-md-6'>
    //       <h4>Siguenos en las Redes</h4>
    //     </div>
    //       <div class='col-xs-12 pt-3'>
    //       <p class="text-center text-muted text-light">Copyright © 2022</p>
    //       </div>
    //   </div>

    // </div>





    )
//     <footer>
//     <div class="footer-container">
             
//             <div class="footer-content-container">
//                 <span class="menu-title">Contactos</span>
//                 <a href="" class="menu-item-footer">Home</a>
//                 <a href="" class="menu-item-footer">Courses</a>
//                 <a href="" class="menu-item-footer">Testimonials</a>
//             </div>
//             <div class="footer-content-container">
//                 <span class="menu-title">Horarios de Atención</span>
//                 <FontAwesomeIcon icon={['fas', 'clock']} className='h2' style={{ color: 'DodgerBlue' }}/>
//                 <a href="" class="menu-item-footer">Legal</a>
//                 <a href="" class="menu-item-footer">Cookies</a>
//                 <a href="" class="menu-item-footer">Legal Advice</a>
                
//             </div>
        
        
//         <div class="footer-content-container">
//             <span class="menu-title">Siguenos en las Redes</span>
//             <div class="social-container">
//                 <a href="" class="social-link"></a>
//                 <a href="" class="social-link"></a>
//                 <a href="" class="social-link"></a>
//             </div>
//         </div>
//     </div>
//     <div class="copyright-container">
//         <span class="copyright">Copyright 2022.</span>
//     </div>
// </footer>







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