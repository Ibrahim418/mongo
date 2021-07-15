import React from 'react'
import GroupeAdmin from './GroupeAdmin'
import { Link } from "react-router-dom";
import './Groupes.css'
const Fetchgroupe = ({groupe}) => {
  
    
    return (
        <div className="wrapper">
        <div className="cardgr">
        
            
          <img src="/images/camp1.jpg"/>
          <div className="info">
         <Link to={`/GroupeAdmin/${groupe._id}`}>  <p> {groupe.Name&&groupe.theme}</p> </Link>
         </div>
        </div>
        </div>
    )
}

export default Fetchgroupe
