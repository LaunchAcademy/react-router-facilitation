import React from 'react';

const Review = (props) => {
  let {id, rating, body} = props

  return(
    <div className="review">
      <h3> Review </h3>
      <p>
        Rating: {rating}
      </p>
      <p>
        Body: {body}
      </p>
    </div>
  )
}

export default Review;
