import React, { useState, useEffect }  from 'react'
import Review from "./Review"

const BarShowContainer = (props) => { 
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    cover_charge: null,
    hours_of_operation: "",
    reviews: []
  })


  const fetchBar = async () => {
  
  }

  useEffect(() => {
    // fetchBar()
  }, [])

  const barReviews = barRecord.reviews.map(review => {
    return (
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <div className="bars-container">
      <div className="bar">

        <h3> You are viewing: {barRecord.name} </h3>

        <div>
          {barReviews}
        </div>
      </div>
    </div>
  )
}

export default BarShowContainer



