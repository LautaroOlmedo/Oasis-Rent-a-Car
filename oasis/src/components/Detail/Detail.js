import React, {useContext} from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useParams } from "react-router-dom";
import negroOasis from '../../media/negroOasis.png'
import Footer from "../Footer/Footer";
import './Detail.css'
import {FormattedMessage} from 'react-intl'
import { langContext } from "../../context/lanContext";
import Calendarr from "../Calendar/Calendar";


export default function Detail(){
  const {id} = useParams(); 
 
  let filter = data && data.filter(el => el.id == id)
    return(
        <div>
          
          <div class='bg-detail'>
            <img src={negroOasis} class="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
          </div>
          <center class='ms-4 mt-5 col-lg-10 pl-0 pull-left'>
          <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h3 class='ms-3 fw-bold'>{filter[0].nombre}</h3>
                   </p>
                </span>
                <hr/>
          <div class='calendario-detail col-xs-6 position-absolute top-50 start-50 '>
          <Calendarr />
          </div>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Air"/></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Hydraulic"/></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Central"/></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Raise" /></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Doors" /></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Passengers" /></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Trunk" /></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Bluetooth" /></h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Stereo" /></h5>
                   </p>
                </span>
                
         
          {
            filter[0].gps ? <span class='col-lg-12 pl-0 pr-0' >
            <p class='d-flex mb-0'>
              <h5>✓</h5><h5><FormattedMessage id="detail.Gps" /></h5>
             </p>
          </span> : null
          }
          {
            filter[0].caja ?<span class='col-lg-12 pl-0 pr-0' >
            <p class='d-flex mb-0'>
              <h5>✓</h5><h5> <FormattedMessage id="detail.Automatic" /></h5>
             </p>
          </span> : null
          }
          {
            filter[0].tipo ? <span class='col-lg-12 pl-0 pr-0' >
            <p class='d-flex mb-0'>
              <h5>✓</h5><h5><FormattedMessage id="detail.4x4" /></h5>
             </p>
          </span> : null
          }
          <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Aditional" /> <FormattedMessage id="deatil.Optional" /></h5>
                   </p>
           </span>
          
          </center>
          <div>
          {/* <iframe href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26804.498539547658!2d-68.87602869388779!3d-32.883297940502054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1668040463749!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          
          <Link to={'/home'}>
                  <a type="button" className="ms-4 mt-3 btn btn-lg btn btn-outline-secondary "><FormattedMessage id='detail.Home' defaultMessage={'Home'}/></a>
          </Link>
          
          </div>
          <Footer />
        </div>
    );
};