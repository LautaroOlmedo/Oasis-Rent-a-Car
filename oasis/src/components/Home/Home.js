import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Maps from '../Maps/Maps'
import NavBar from '../NavBar/NavBar'
import Reviews from '../Reviews/Reviews'
import './Home.css'
import animals from '../../media/animals.jpeg'
import negroOasis from '../../media/negroOasis.png'
import petFriendly from '../Home/petFriendly.png'

function Home() {

  return (
    
    <div >
      <NavBar />
        <div class='img'>

        </div>
      <div class='bg-home'>
      <img src={negroOasis} class="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
      {<Cards />}
      
      <center >
      <div class="card w-50 mb-5" >
        <img src={petFriendly} class="card-img-top" alt="..."/>
  
      </div>
      <h5 style={{fontSize: '25px', margin: '20px 0'}}>
        En Oasis creemos que los animales son un integrante más de la familia, por eso
        podes llevarlo donde vayas con vos!
       </h5>
      </center>
      </div>
      <center>
        
      </center>
      <Maps />
    
      <Footer />
      </div>
      )
    }

export default Home