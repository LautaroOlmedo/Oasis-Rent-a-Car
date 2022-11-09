import React from 'react'
import './Cards.css'
import data from '../data.json'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Cards() {
  const data1 = data

  return (
    <div className="row ms-5 me-5">
      {
        data1 && data1.map((el, index) => {
          return(
            <div key={index} className="col mb-5">
              <center>
                <div className="card" style={{height: '375px', width: '260px', background: 'white'}}>
                  {
                    el.image ? <img src={el.image} class="card-img-top img-fluid" alt='not found'/> 
                    : null
                  }
                  <div className="card-body">

                    <h4 className="card-title">{el.nombre}</h4>
                    <hr />
                    {/* <p>{el.aire}: Si</p>
                    <p>{el.direccion}: Si</p>
                    {/* {
                      el.alarma ? <p>{el.alarma}: Si</p> : null
                    }
                    <p>{el.cristales}: Si</p> */}
                    {/* <p>Puertas: {el.puertas}</p> */}
                    <p><FontAwesomeIcon icon="fa-solid fa-user" class='me-2 h2' style={{height: '17px'}}/> {el.pasajeros}</p>
                  
                     
                  
                     <p><FontAwesomeIcon icon="fa-solid fa-briefcase" class='me-2 h2' style={{height: '17px'}}/> {el.baul}</p>
                     
                    {/* <p>{el.Stereo}: Si</p>
                    <p>{el.bluetooth}: Si</p>
                    {
                      el.gps ? <p>{el.gps}: Si</p> : null
                    }
                                        {
                      el.caja ? <p>{el.caja}: Si</p> : null
                    }
                                        {
                      el.tipo ? <p>{el.tipo}: Si</p> : null
                    } */}

                    {
                      <center>
                      <Link to={'/home/' + el.id}>
                      <a type="button" className="btn btn-dark btn-sm ">Detail</a>
                    </Link>
                    </center>
                    }
                    
                  </div>
                </div>
              </center>
            </div>
        )})    
      }  
    </div>
    
  )
}

export default Cards