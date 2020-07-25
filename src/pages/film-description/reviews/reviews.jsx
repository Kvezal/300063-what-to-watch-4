import React from "react";
import PropTypes from "prop-types";

import Review from "@components/review/review";
import {reviewType} from "@common/types";
import {splitListIntoTwoColumn} from "@common/utils";

const Reviews = (props) => {
  const {list, separatorColor} = props;

  const {left, right} = splitListIntoTwoColumn(list);
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {left.map((item) => <Review key={item.id} underlineColor={separatorColor} {...item}/>)}
    </div>
    <div className="movie-card__reviews-col">
      {right.map((item) => <Review key={item.id} underlineColor={separatorColor} {...item}/>)}
    </div>
  </div>;
};

Reviews.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape(reviewType)
  ).isRequired,
  separatorColor: PropTypes.string.isRequired,
};

export default Reviews;
