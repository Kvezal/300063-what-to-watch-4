import React from "react";
import PropTypes from "prop-types";

import Review from "@components/review";
import reviewType from "@types/review";
import splitListIntoTwoColumn from "@utils/split-list-into-two-column";


const Reviews = (props) => {
  const {list} = props;

  const {left, right} = splitListIntoTwoColumn(Review, list);
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">{left}</div>
    <div className="movie-card__reviews-col">{right}</div>
  </div>;
};

Reviews.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape(reviewType)
  ).isRequired,
};

export default Reviews;
