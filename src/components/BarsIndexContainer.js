import React, { useState, useEffect }  from 'react'

import BarTile from './BarTile';

const BarsIndexContainer = (props) => {
  const [bars, setBars] = useState([])

  const fetchBars = async () => {
    const response = await fetch("/api/v1/bars")
    const parsedBarStuff = await response.json()
    setBars(parsedBarStuff)
  }

  useEffect(() => {
    fetchBars()
  }, [])

  const barTiles = bars.map(bar => {
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
