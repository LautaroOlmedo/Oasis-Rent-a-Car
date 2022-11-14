import React, {useContext} from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
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
import Calendarr from '../Calendar/Calendar'
import Maps from '../Maps/Maps'


function Home() {
  
  const idioma = useContext(langContext);
  return (
   
    
    <div >
      <NavBar />
        
      <p class="fw-bolder fs-5 card-body w-50 d-none d-md-block position-absolute bottom-50 end-50"><FormattedMessage id='landing.Description'/></p>
      <div class='bg-home'>
      <img src={negroOasis} class="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
      
      {<Cards />}
      

     
     


      <div className='imagePerro'>
        <img src={petFriendly} height={"350px"} alt="..." />
      </div>
      </div>
      <div>
      <h5 className='w-50 mb-5' style={{fontSize: '25px', margin: '-224px 0px 0px 750px', marginLeft: '700px'}}>
        <FormattedMessage id='home.pets'/>
       </h5>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <Maps />

      <Footer />
      </div>
      )
    }

export default Home