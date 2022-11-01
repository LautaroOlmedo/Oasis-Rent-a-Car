import React from 'react'
import './Cards.css'
import data from '../data.json'

function Cards() {
  const data1 = data

  return (
    <div className="row cardInicio">
      {
        data1 && data1.map((el, index) => {
          return(
            <div key={index} className="col mb-5">
              <center>
                <div className="card" style={{height: '590px', width: '330px', background: 'gold', borderRadius: 100}}>
                  <div className="card-body">
                    <h3 className="card-title">{el.nombre}</h3>
                    <hr />
                    <h5 style={{fontSize: '25px', margin: '20px 0'}}>CARACTERISTICAS:</h5>
                    <p>{el.aire}: Si</p>
                    <p>{el.direccion}: Si</p>
                    {
                      el.alarma ? <p>{el.alarma}: Si</p> : null
                    }
                    <p>{el.cristales}: Si</p>
                    <p>Puertas: {el.puertas}</p>
                    <p>Pasajeros: {el.pasajeros}</p>
                    <p>{el.baul}</p>
                    <p>{el.Stereo}: Si</p>
                    <p>{el.bluetooth}: Si</p>
                    {
                      el.gps ? <p>{el.gps}: Si</p> : null
                    }
                                        {
                      el.caja ? <p>{el.caja}: Si</p> : null
                    }
                                        {
                      el.tipo ? <p>{el.tipo}: Si</p> : null
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