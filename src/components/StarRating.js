import React from "react";
import StarRatingComponent from "react-star-rating-component";

function StarRating(props) {
  if (props.rating) {
    return (
      <div className="customer-rating-wrap">
        <StarRatingComponent
          name=''
          editing={false}
          starCount={5}
          value={props.rating}
        />
      </div>
    );
  } else {
    return <div />;
  }
}

export default StarRating;
