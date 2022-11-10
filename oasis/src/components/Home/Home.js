import React, {useContext} from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Maps from '../Maps/Maps'
import NavBar from '../NavBar/NavBar'
import Reviews from '../Reviews/Reviews'
import './Home.css'
import animals from '../../media/animals.jpeg'
import negroOasis from '../../media/negroOasis.png'
import petFriendly from '../Home/petFriendly.png'
import {IntlProvider, FormattedMessage} from 'react-intl'
import EnglishMessage from '../../lang/en-US.json'
import SpanishMessage from '../../lang/es-ES.json'
import { langContext } from '../../context/lanContext'
function Home() {
  
  const idioma = useContext(langContext);
  return (
   
    
    <div >
      <NavBar />
        
      <div class='bg-home'>
      <img src={negroOasis} class="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
      
      {<Cards />}
      
      <center >
      <div class="card w-50 mb-5" >
        <img src={petFriendly} class="card-img-top" alt="..."/>
  
      </div>
      <h5 class='w-50 mb-5' style={{fontSize: '25px', margin: '20px 0'}}>
        <FormattedMessage id='home.pets'/>
       </h5>
      </center>
      </div>
      <center>
        <Maps />
      </center>
      {/* <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26804.498539547658!2d-68.8760286938878!3d-32.883297940502054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1668000203221!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
     
      <Footer />
      </div>
      )
    }

export default Home