import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Home.css'
import negroOasis from '../../media/negroOasis.png'
import petFriendly from '../Home/petFriendly.png'
import {FormattedMessage} from 'react-intl'
import Maps from '../Maps/Maps'

function Home() {
  return (
    <div >
      <NavBar />
      <div className='contenedor-parrafo'>
        <p className="parrafo-home">
          <FormattedMessage id='landing.Description'/>
        </p>
      </div>
      <div className='bg-home'>
        <img src={negroOasis} className="imagen-home card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
        <div className='cartas'>
          {<Cards />}
        </div>
      </div>
      <div className='contenedor-imagenPerro'>
        <img className='imagen-perro' src={petFriendly} alt="..." />
      </div>
      <div className='contenedor-textoPerro'>
        <h5 className='texto-perro mb-5'>
          <FormattedMessage id='home.pets'/>
        </h5>
      </div>
        <Maps />

        <Footer />
    </div>
      )
  }

export default Home