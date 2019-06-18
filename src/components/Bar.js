import React from 'react'

import Review from './Review'

const Bar = (props) => {
  let { id, averageRating, name, reviews } = props

  let barReviews = reviews.map(review => {
    return(
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <div className="bar">
      <h2>{name}</h2>
      <span>Average Rating: {averageRating}</span>
      <div>
        {barReviews}
      </div>
    </div>
  )
}

export default Bar;
