import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import negroOasis from '../../media/negroOasis.png'
import {FormattedMessage} from 'react-intl'

import { langContext } from '../../context/lanContext'

function LandingPage() {
  console.log(langContext)
  return (
    <div>
      <NavBar/>
        <div className='logo'>
         <img src={negroOasis} className='img-fluid' alt="logo" style= {{ height: '400px' }} />
        </div>
        <div className='card-qs'>
          <div>
            <div  style={{width: '700px', }}>
              <div className="card-body">
                <p className="card-text">
                  <FormattedMessage id='landing.Description'/>
                </p>
              </div>
            </div>
          </div>
       </div>
        <Footer />
    </div>
  )
}

export default LandingPage



















 