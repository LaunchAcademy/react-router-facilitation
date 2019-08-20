import React, { useState, useEffect }  from 'react'
import Bar from '../components/Bar'

const BarShowContainer =(props) => {
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    cover_charge: null,
    hours_of_operation: "",
    reviews: []
  })

  useEffect(() => {
    let barId = props.match.params.id;
    fetch(`http://localhost:4567/api/v1/bars/${barId}`)
    .then((response) => response.json())
    .then((barJson) => {
      console.log(barJson)
      // debugger
      setBarRecord(barJson)
    })
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
