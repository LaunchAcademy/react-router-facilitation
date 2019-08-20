import React, { useState, useEffect }  from 'react'

import BarTile from '../components/BarTile';

const BarsIndexContainer = (props) => {
  const [bars, setBars] = useState([])

  useEffect(() => {
    // debugger
    fetch('http://localhost:4567/api/v1/bars')
    .then((response) => response.json())
    .then((barsJson) => {
      // debugger;
      setBars(barsJson)
    })
  }, [])

  let barTiles = bars.map(bar => {
    return(
      <BarTile
        key={bar.id}
        id={bar.id}
        name={bar.name}
        address={bar.address}
        hours_of_operation={bar.hours_of_operation}
        cover_charge={bar.cover_charge}
      />
    )
  })

  return(
    <div className="bars-container">
      <h2> I am the Bars Index Container </h2>
      {barTiles}
    </div>
  )
}

export default BarsIndexContainer;
