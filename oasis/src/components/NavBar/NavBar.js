import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutUs from '../AboutUs/AboutUs'
import { Link } from 'react-router-dom'
import Questions from '../Questions/Questions'


function NavBar() {
  return (
<ul class="nav bg-dark">
<FontAwesomeIcon icon="fa-brands fa-whatsapp"  className='h2 mt-3 ms-3' style={{ color: 'DodgerBlue' }} />

  <li class="nav-item ">
  <a class="text-white nav-link active top-0 start-50 mt-3" aria-current="page" href="#">WhatsApp +54 (9) 2610000000</a>
    
  </li>
  <li class="nav-item">
    <a class="text-white nav-link mt-3" href="#">Sobre Nosotros</a>
  </li>
  <li class="nav-item">
    <a class="text-white nav-link mt-3" href="#">Preguntas Frecuentes</a>
  </li>
  <Link to={'/home'}>
            <button type="button" className="fs-5 btn btn-dark mt-3 mb-3 ms-5">Home</button>
          </Link>
  {/* <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li> */}
</ul>
  )



  //   <>
  //   <div className='container'>
  //     <div className="wrapper">
  //       <div className="logoContainer">
          
  //       </div>
  //       <div className="menu">
  //         <p className="menuItem a">
  //           WHATSAPP
  //           <p>
  //           +54 (9) 2610000000
  //           </p>
  //         </p>
  //         <p className='menuItem b'>
  //           <Link to={'/home/aboutUs'}>
  //             <a href={<AboutUs />} >
  //               SOBRE NOSOTROS
  //             </a>
  //           </Link>
  //         </p>
  //         <p className="menuItem c">
  //           <Link to={'/home/questions'}>
  //             <a href={<Questions />}>
  //               PREGUNTAS FRECUENTES
  //             </a>
  //           </Link>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   </>
  // )
}

export default NavBar