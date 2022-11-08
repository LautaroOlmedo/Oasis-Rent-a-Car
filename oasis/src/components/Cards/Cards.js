import React from 'react'
import './Cards.css'
import data from '../data.json'
import { Link } from "react-router-dom";


function Cards() {
  const data1 = data

  return (
    <div className="row ms-5 me-5">
      {
        data1 && data1.map((el, index) => {
          return(
            <div key={index} className="col mb-5">
              <center>
                <div className="card" style={{height: '265px', width: '260px', background: 'white'}}>
                  {
                    el.image ? <img src={el.image} class="card-img-top" alt='not found' width={150} height={150}/> 
                    : null
                  }
                  <div className="card-body">

                    <h3 className="card-title">{el.nombre}</h3>
                    <hr />
                    <h5 style={{fontSize: '25px', margin: '20px 0'}}>CARACTERISTICAS:</h5>
                    {/* <p>{el.aire}: Si</p>
                    <p>{el.direccion}: Si</p>
                    {/* {
                      el.alarma ? <p>{el.alarma}: Si</p> : null
                    }
                    <p>{el.cristales}: Si</p> */}
                    {/* <p>Puertas: {el.puertas}</p> */}
                    <p>Pasajeros: {el.pasajeros}</p>
                    <p>{el.baul}</p>
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
                      <button type="button" className="fs-5 btn btn-dark mt-3 mb-3 ms-5">Detalle</button>
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