import React from 'react'
import { Link } from 'react-router'


const BarTile = (props) => {
    let { id, name, address, hours_of_operation, cover_charge } = props
    return(
      <div className="bar">
        <h1><Link to={`/bars/${id}`}> {name} </Link></h1>
        <h3>Address: {address} </h3>
        <h3>Hours of Operation: {hours_of_operation} </h3>
        <h3>Cover Charge: {cover_charge} </h3>
      </div>
    )
  }

export default BarTile;
