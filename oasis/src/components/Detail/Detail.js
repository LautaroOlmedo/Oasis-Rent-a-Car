import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useParams } from "react-router-dom";
import negroOasis from '../../media/negroOasis.png'
import Footer from "../Footer/Footer";
import './Detail.css'
import {FormattedMessage} from 'react-intl'
import NavBar from "../NavBar/NavBar";

export default function Detail(){
  const {id} = useParams(); 
 
  let filter = data && data.filter(el => el.id == id)
    return(
<div>
          <NavBar />
          <div className='bg-detail'>
            <img src={negroOasis} className="card-img-top w-25 ms-5 top-0 start-50 mt-1" alt="..."/>
          </div>
          <center className='ms-4 mt-5 col-lg-10 pl-0 pull-left'>
            <div className="contenedor-imagen">
              <img className="imagen-detail" src={filter[0].image} alt="imagen"/>
            </div>
            <br /><br />
          <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h3 className='ms-3 fw-bold'>{filter[0].nombre}</h3>
                   </p>
                </span>
                <hr/>
          <div className='position-absolute top-50 start-50 '>
          </div>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Air"/></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Hydraulic"/></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Central"/></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Raise" /></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Doors" /></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5>  <FormattedMessage id="detail.Passengers" /></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Trunk" /></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Bluetooth" /></h5>
                   </p>
                </span>
                <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Stereo" /></h5>
                   </p>
                </span>
                
         
          {
            filter[0].gps ? <span className='col-lg-12 pl-0 pr-0' >
            <p className='d-flex mb-0'>
              <h5>✓</h5><h5><FormattedMessage id="detail.Gps" /></h5>
             </p>
          </span> : null
          }
          {
            filter[0].caja ?<span className='col-lg-12 pl-0 pr-0' >
            <p className='d-flex mb-0'>
              <h5>✓</h5><h5> <FormattedMessage id="detail.Automatic" /></h5>
             </p>
          </span> : null
          }
          {
            filter[0].tipo ? <span className='col-lg-12 pl-0 pr-0' >
            <p className='d-flex mb-0'>
              <h5>✓</h5><h5><FormattedMessage id="detail.4x4" /></h5>
             </p>
          </span> : null
          }
          <span className='col-lg-12 pl-0 pr-0' >
                  <p className='d-flex mb-0'>
                    <h5>✓</h5><h5> <FormattedMessage id="detail.Aditional" /> <FormattedMessage id="deatil.Optional" /></h5>
                   </p>
           </span>
          
          </center>
          <div>
          
          <Link to={'/home'}>
                  <button type="button" className="boton-inicio ms-4 mt-3 btn btn-lg btn-dark "><FormattedMessage id='detail.Home' defaultMessage={'Home'}/></button>
          </Link>
          </div>
          <br />
          <Footer />
        </div>    
    );
};