import React, {useContext} from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useParams } from "react-router-dom";
import negroOasis from '../../media/negroOasis.png'
import Footer from "../Footer/Footer";
import './Detail.css'
import {FormattedMessage} from 'react-intl'
import { langContext } from "../../context/lanContext";


export default function Detail(){
  const {id} = useParams(); 
 
  let filter = data && data.filter(el => el.id == id)
    return(
        <div>
          
          <div class='bg-detail'>
            <img src={negroOasis} class="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
          </div>
          <center class='ms-4 mt-5 col-lg-6 pl-0 pull-left'>
          <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h3 class='ms-3'>{filter[0].nombre}</h3>
                   </p>
                </span>
                <hr/>
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
          <Link to={'/home'}>
                  <a type="button" className="position-absolute top-0 start-50 mt-3 btn btn-dark "><FormattedMessage id='detail.Home' defaultMessage={'Home'}/></a>
          </Link>
          </div>
          <Footer />
        </div>
    );
};