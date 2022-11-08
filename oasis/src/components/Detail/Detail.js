import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useParams } from "react-router-dom";

export default function Detail(){

    
  const {id} = useParams(); 
  console.log(id);
  console.log(data);
  let filter = data && data.filter(el => el.id == id)
  console.log(filter[0]);
  

    return(
        <div>
          <center>
          <h1>{filter[0].nombre}</h1>
          <h1>{filter[0].aire}</h1>
          <h1>{filter[0].direccion}</h1>
          <h1>{filter[0].alarma}</h1>
          <h1>{filter[0].cristales}</h1>
          <h1>{filter[0].puertas}</h1>
          <h1>{filter[0].pasajeros}</h1>
          <h1>{filter[0].baul}</h1>
          <h1>{filter[0].bluetooth}</h1>
          <h1>{filter[0].Stereo}</h1>
          <h1>{filter[0].adicional}</h1>
          {
            filter[0].gps ? <h1>filter[0].gps</h1> : null
          }
          {
            filter[0].caja ? <h1>filter[0].caja</h1> : null
          }
          {
            filter[0].tipo ? <h1>filter[0].tipo</h1> : null
          }
          </center>
           
        </div>
    );
};