import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FormattedMessage} from 'react-intl'

function Footer() {
  return (

    <footer className='row p-5 pb-2 bg-black justify-content-around mx-0 position-relative fixed-bottom'>
      <div className='col-md-3 text-center'>
        <div className='text-white'>
          <h5 className='text-uppercase font-weight-light text-white mb-3'>
          <FormattedMessage id='footer.Atention' defaultMessage={'Public attention'}/>
          </h5>
          <FontAwesomeIcon icon={['fas', 'phone-alt']} className='h2' style={{ color: 'DodgerBlue' }}/>
          <p>+54 9 261 512-1525</p>
          <p>+54 9 261 667-6382</p>
          <p>oasisrentacarmza@gmail.com</p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <div className='text-white'>
          <h5 className='text-uppercase font-weight-light text-white mb-3'>
          <FormattedMessage id='footer.Hours' defaultMessage={'Public attention'}/>
          </h5>
          <FontAwesomeIcon icon={['fas', 'clock']} className='h2' style={{ color: 'DodgerBlue' }}/>
          <p> <FormattedMessage id='footer.hours1'/></p>
          <p> <FormattedMessage id='footer.hours2'/></p>
          <p> <FormattedMessage id='footer.hours3'/></p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <h5 className='text-uppercase font-weight-light text-light mb-3'>
        <FormattedMessage id='footer.Follow' defaultMessage={'FOLLOW US ON THE NETWORKS!'}/>
        </h5>
        <div>
          {/* <FontAwesomeIcon icon={'fa-brands fa-facebook'} className='h2 me-4' style={{ color: '#11154B' }}/> */}
          
          <a aria-current="page" href="https://www.instagram.com/oasis.rentacarmza/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={"fa-brands fa-square-instagram" } className='h2 me-4' style={{ color: 'DodgerBlue' }}/></a>
        
          
             <a aria-current="page" href="https://api.whatsapp.com/send?phone=2617743816" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={"fa-brands fa-square-whatsapp" } className='h2 ' style={{ color: 'DodgerBlue' }}/></a>
             
        
        </div>
      </div>
      <div className='col-xs-12 pt-5'>
      <p className="text-center text-muted text-light">Copyright © 2022 Oasis.</p>
      </div>
    </footer>

    )
};

export default Footer