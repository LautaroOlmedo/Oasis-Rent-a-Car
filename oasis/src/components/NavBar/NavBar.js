import React, {useContext} from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import es from '../../media/spain.png'
import en from '../../media/united-kingdom.png'
import {langContext} from '../../context/lanContext'


function NavBar() {
  const idioma = useContext(langContext);

  return (
    <div className="nav navbar-expand-md bg-black ">
      <a href="https://api.whatsapp.com/send?phone=2617743816" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon="fa-brands fa-square-whatsapp"  className='icon h2 mt-2 pt-1 ms-3' style={{ color: 'DodgerBlue' }} />
      </a>

      <li className="nav-item ">
        <a className="text-white  nav-link active top-0 start-50 mt-2" aria-current="page" href="https://api.whatsapp.com/send?phone=2617743816" target="_blank" rel='noreferrer'>WhatsApp</a>
    
      </li>
      <br/>
      <a href="https://www.instagram.com/oasis.rentacarmza/" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon='fa-brands fa-square-instagram' className='icon h2 mt-2 pt-1' style={{ color: 'DodgerBlue' }}/>       
      </a>
      <li className="nav-item ">
        <a className="text-white  nav-link active top-0 start-50 mt-2" aria-current="page" href="https://www.instagram.com/oasis.rentacarmza/" target="_blank" rel='noreferrer'>Instagram</a>
 
      </li>
      <br/>
      <a href="mailto:oasisrentacarmza@gmail.com" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon="fa-solid fa-envelope" className='icon h2 mt-2 pt-1' style={{ color: 'DodgerBlue' }}/>
      </a>
      <li className="nav-item ">
        <a className="text-white  nav-link active top-0 start-50 mt-2" aria-current="page" href="mailto:oasisrentacarmza@gmail.com" target="_blank" rel='noreferrer'>Email</a>
      </li>
      <br/> 
      <div className="position-absolute top-0 end-0 me-5">
        <div className='banderas'>
					<button className='bg-black border border-0 me-3' onClick={() => idioma.establecerLenguaje('es-ES')}>
            <img src={es} style={{height:'35px'}} alt="imagen"/>
          </button>
					<button className='bg-black border border-0' onClick={() => idioma.establecerLenguaje('en-US')}>
            <img src={en} style={{height:'35px'}} alt="imagen"/>
          </button>
        </div>
	</div>
</div>

  )
}

export default NavBar