import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Maps from '../Maps/Maps'
import NavBar from '../NavBar/NavBar'
import Reviews from '../Reviews/Reviews'
import './Home.css'
import animals from '../../media/animals.jpeg'
function Home() {

  return (
    <div className='inicio'>
      <NavBar />
      <Cards />
      <center>
      <div>
        <img src={animals} class="img-thumbnail" alt="not found" height={400} width={500}></img>
        <br />
        <div style={{fontSize: 25}}>
         <p>Amamos y disfrutamos la compañía de los animales, podes llevarlo con vos!!,
           Amamos y disfrutamos la compañía de los animales, podes llevarlo con vos!!
           Amamos y disfrutamos la compañía de los animales, podes llevarlo con vos!!
      
          </p>
        </div>
      </div>
      </center>
      <center>
        
      </center>
      <Reviews />
      <Maps />
      <Footer />
    </div>
  )
}

export default Home