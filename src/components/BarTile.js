import React from 'react'
import { Link } from 'react-router-dom'

const BarTile = ({ id, name, address, hours_of_operation, cover_charge }) => {
    return(
      <div className="bar callout">
        <h3> 
          <Link to={`/bars/${id}`}> 
            {name} 
          </Link>
        </h3>
        <h4>Address: {address} </h4>
        <h4>Hours of Operation: {hours_of_operation} </h4>
        <h4>Cover Charge: {cover_charge} </h4>

      </div>
    )
  }

export default BarTile;
