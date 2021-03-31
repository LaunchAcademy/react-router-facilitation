import React, { useState, useEffect }  from 'react'
import Bar from './Bar'

const BarShowContainer = (props) => { 
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    cover_charge: null,
    hours_of_operation: "",
    reviews: []
  })
  
  const id = props.match.params.id

  const fetchBar = async (id) => {
    const response = await fetch(`/api/v1/bars/${id}`)
    const barData = await response.json()
    setBarRecord(barData)
  }

  useEffect(() => {
    fetchBar()
  }, [])

  return(
    <div className="bars-container">
      <h3> Bar Showssssssss Container </h3>
      <Bar
        key={barRecord.id}
        id={barRecord.id}
        name={barRecord.name}
        reviews={barRecord.reviews}
      />
    </div>
  )
}

export default BarShowContainer
