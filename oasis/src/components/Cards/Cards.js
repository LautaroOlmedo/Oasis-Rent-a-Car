import React, {useContext} from 'react'
import './Cards.css'
import Car from '../Car/Car'
import {langContext} from '../../context/lanContext'


function Cards() {
  let idioma = useContext(langContext)
  console.log(idioma);

  return (
    // <div className="row ms-5 me-5">
      // {
      //   data1 && data1.map((el, index) => {
      //     return(
      //       <div key={index} className="mb-5">
      //           <div className='movieGrid'>
      //             <div className="movieCard">
      //               {
      //                 el.image ? <img width={345} height={230} src={el.image} className="movieImage" alt='not found'/> 
      //                 : null
      //               }
      //             </div>
      //           </div>
      //             <div className="">

      //               <h4 className="">{el.nombre}</h4>
      //               <hr />
                  
      //               <p><FontAwesomeIcon icon="fa-solid fa-user" class='me-2 h2' style={{height: '17px'}}/> <FormattedMessage id='card.EnglishDataPassengers' defaultMessage={"5 passengers"}/></p>
                  
                
      //                <p><FontAwesomeIcon icon="fa-solid fa-briefcase" class='me-2 h2' style={{height: '17px'}}/> <FormattedMessage id='card.Trunk' defaultMessage={"spacious trunk"}/></p>
                     
                 
      //               {
      //               <div>
      //                 <Link to={'/home/' + el.id}>
      //                 <button type="button" className=" btn btn-dark btn-sm "><FormattedMessage id='card.Detail' defaultMessage={'Detail'}/></button>
      //               </Link>
      //               </div>
      //               } 
      //             </div>
      //         </div>
      //   )})    
      // }  
    // </div>
    <div>
      <Car/>
    </div>
  )
}

export default Cards