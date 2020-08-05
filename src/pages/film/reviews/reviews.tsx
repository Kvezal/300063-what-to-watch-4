import * as React from "react";

import Review from "@components/review/review";
import {splitListIntoTwoColumn} from "@common/utils";

import {IReviewsProps} from "./interface";


const Reviews: React.FunctionComponent<IReviewsProps> = (props: IReviewsProps) => {
  const {reviews, separatorColor} = props;

  const {left, right} = splitListIntoTwoColumn(reviews);
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {left.map((item) => <Review key={item.id} underlineColor={separatorColor} {...item}/>)}
    </div>
    <div className="movie-card__reviews-col">
      {right.map((item) => <Review key={item.id} underlineColor={separatorColor} {...item}/>)}
    </div>
  </div>;
};

export default Reviews;
