import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getDetail } from "../redux/actions";
import { useParams } from "react-router-dom";

export default function Detail(){

    
  const {id} = useParams(); 
  console.log(id);
  

    return(
        <div>
            <p>Hi</p>
        </div>
    );
};