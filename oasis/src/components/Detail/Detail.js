import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useParams } from "react-router-dom";
import negroOasis from '../../media/negroOasis.png'
import Footer from "../Footer/Footer";
import './Detail.css'


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
                    <h5>✓</h5><h5>  {filter[0].aire}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].direccion}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].alarma}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].cristales}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].puertas}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].pasajeros}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].baul}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].bluetooth}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].Stereo}</h5>
                   </p>
                </span>
                <span class='col-lg-12 pl-0 pr-0' >
                  <p class='d-flex mb-0'>
                    <h5>✓</h5><h5>  {filter[0].adicional} (Opcional)</h5>
                   </p>
                </span>
         
          {/* {
            filter[0].gps ? <h5>filter[0].gps</h5> : null
          }
          {
            filter[0].caja ? <h5>filter[0].caja</h5> : null
          }
          {
            filter[0].tipo ? <h5>filter[0].tipo</h5> : null
          } */}
          </center>
           
          <Footer />
        </div>
    );
};