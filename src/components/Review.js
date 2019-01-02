import React from 'react';
// import '../styles/Review.css'

const Review = (props) => {

  let {rating, body, onClick} = props

  return(
    <div className="review" onClick={onClick}>
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
