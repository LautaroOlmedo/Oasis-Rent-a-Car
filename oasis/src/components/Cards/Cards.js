import React, {useContext} from 'react'
import './Cards.css'
import data from '../data.json'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {langContext} from '../../context/lanContext'
import {FormattedMessage} from 'react-intl'


function Cards() {
  let idioma = useContext(langContext)
  const data1 = data
  console.log(idioma);

  return (
    <div className="row ms-5 me-5">
      {
        data1 && data1.map((el, index) => {
          return(
            <div key={index} className="col mb-5">
              <center>
                <div className="card" style={{height: '420px', width: '350px', background: 'white'}}>
                  {
                    el.image ? <img src={el.image} class="card-img-top img-fluid" alt='not found'/> 
                    : null
                  }
                  <div className="card-body">

                    <h4 className="card-title fw-bold">{el.nombre}</h4>
                    <hr />
                  
                    <p><FontAwesomeIcon icon="fa-solid fa-user" class='me-2 h2' style={{height: '17px'}}/> <FormattedMessage id='card.EnglishDataPassengers' defaultMessage={"5 passengers"}/></p>
                  
                
                     <p><FontAwesomeIcon icon="fa-solid fa-briefcase" class='me-2 h2' style={{height: '17px'}}/> <FormattedMessage id='card.Trunk' defaultMessage={"spacious trunk"}/></p>
                     
                 
                    {
                      <center>
                      <Link to={'/home/' + el.id}>
                      <button type="button" className=" btn btn-dark btn-sm "><FormattedMessage id='card.Detail' defaultMessage={'Detail'}/></button>
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