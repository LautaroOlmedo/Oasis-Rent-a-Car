import React, {useContext} from 'react'
import data from '../data.json'
import { Link } from "react-router-dom";
import './Car.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {langContext} from '../../context/lanContext'
import {FormattedMessage} from 'react-intl'


function Car() {
  let idioma = useContext(langContext)
  const data1 = data

  // function onClickBoton() {
  //   const boton = document.getElementById('boton')
    
  //   boton.addEventListener('click', (event) => {
  //     window.scrollTo({top: 0, behavior: 'smooth'})
  //   })
  // }
  
  return (
    <ul className="movieGrid">
      {
        data1 && data1.map((el, index) => {
          return(
            <li key={index} className="movieCard">
              {
                el.image ? <img width={400} height={230} src={el.image} className="movieImage" alt='not found'/>
                      : null
              }
              <div>
                <h4 className="carTitulo">{el.nombre}</h4>
              </div>
              <hr />
              <p><FontAwesomeIcon icon="fa-solid fa-user" className='me-2 h2' style={{height: '17px'}}/> <FormattedMessage id='card.EnglishDataPassengers' defaultMessage={"5 passengers"}/></p> 
              <p><FontAwesomeIcon icon="fa-solid fa-briefcase" className='' style={{height: '17px'}}/>&nbsp;&nbsp;&nbsp;<FormattedMessage id='card.Trunk' defaultMessage={"spacious trunk"}/></p>
              {
                <div>
                  <Link to={'/home/' + el.id}>
                    <button onClick={window.onbeforeunload = function () {
                      window.scrollTo(0, 0);
                    }}
                    id='boton' type="button" className=" btn btn-dark btn-sm "><FormattedMessage id='card.Detail' defaultMessage={'Detail'}/></button>
                  </Link>
                </div>
              }
            </li>
        )})
      }
    </ul>
  )
}

export default Car