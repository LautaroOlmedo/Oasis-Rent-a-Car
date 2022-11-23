import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Home.css'
// import BannerMendoza from '../../media/Banner-Mendoza-4.png'
import negroOasis from '../../media/negroOasis.png'
import petFriendly from '../Home/petFriendly.png'
import {FormattedMessage} from 'react-intl'
import Maps from '../Maps/Maps'

function Home() {
  return (
    <div >
      <NavBar />
      <div className='bg-home1'>
        <img src={negroOasis} className="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
      </div>
      <div className='contenedor-parrafo'>
        <p className="parrafo-home">
          <FormattedMessage id='landing.Description'/>
        </p>
      </div>
      <Cards />
      <div className='contenedor-imagenPerro'>
        <img className='imagen-perro' src={petFriendly} alt="..." />
      </div>
      <div className='contenedor-textoPerro'>
        <h5 className='texto-perro mb-5'>
          <FormattedMessage id='home.pets'/>
        </h5>
      </div>
        <Maps />
        <br /> <br />
        <Footer />
    </div>
      )
  }

export default Home