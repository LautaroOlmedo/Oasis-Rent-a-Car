import React, {useContext} from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutUs from '../AboutUs/AboutUs'
import { Link } from 'react-router-dom'
import Questions from '../Questions/Questions'
import es from '../../media/spain.png'
import en from '../../media/united-kingdom.png'
import {FormattedMessage} from 'react-intl'
import {langContext} from '../../context/lanContext'


function NavBar() {
  const idioma = useContext(langContext);

  return (
<ul class="nav bg-black">
<FontAwesomeIcon icon="fa-brands fa-square-whatsapp"  className='h2 mt-3 pt-1 ms-3' style={{ color: '#11154B' }} />

  <li class="nav-item ">
  {/* <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="#">WhatsApp +54 (9) 2610000000</a> */}
  <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="https://api.whatsapp.com/send?phone=2617743816" target="_blank" rel='noreferrer'>WhatsApp</a>
    
  </li>
  <br/>
  <FontAwesomeIcon icon={'fa-brands fa-instagram'} className='h2 mt-3 pt-1 ms-3' style={{ color: '#11154B' }}/>
  <li class="nav-item ">
  {/* <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="#">WhatsApp +54 (9) 2610000000</a> */}
  <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="https://www.instagram.com/oasis.rentacarmza/" target="_blank" rel='noreferrer'>Instagram</a>
 
  </li>
  <br/>
  <FontAwesomeIcon icon="fa-solid fa-envelope" className='h2 mt-3 pt-1 ms-3' style={{ color: '#11154B' }}/>
  <li class="nav-item ">
  {/* <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="#">WhatsApp +54 (9) 2610000000</a> */}
  <a class="text-white  nav-link active top-0 start-50 mt-3" aria-current="page" href="https://www.instagram.com/oasis.rentacarmza/" target="_blank" rel='noreferrer'>oasisrentacarmza@gmail.com</a>
 
  </li>
  <br/>
  <Link to={'/home'}>
            <button type="button" className=" btn btn-black text-white mt-3 mb-3 ms-5"><FormattedMessage id='navBar.home' defaultMessage={'Inicio'}/></button>
  </Link>
  
 
  <div class="nav-item position-absolute top-0 end-0 me-5">
    
 
					<button class='bg-black border border-0 me-3 ' onClick={() => idioma.establecerLenguaje('es-ES')}><img src={es} alt=""/></button>
					<button class='bg-black border border-0' onClick={() => idioma.establecerLenguaje('en-US')}><img src={en} alt=""/></button>
  
	</div>

</ul>

  )
}

export default NavBar