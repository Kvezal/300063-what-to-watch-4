import * as React from "react";

import {IReviewProps} from "./interface";


const Review: React.FC<IReviewProps> = (props: IReviewProps) => {
  const {ratingScore, text, author, date, underlineColor} = props;

  return <div className="review" style={{borderBottom: `1px solid ${underlineColor}`}}>
    <blockquote className="review__quote">
      <p className="review__text">{text}</p>
      <footer className="review__details">
        <cite className="review__author">{author}</cite>
        <time className="review__date" dateTime="2016-12-24">{date}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{ratingScore}</div>
  </div>;
};

Review.defaultProps = {
  underlineColor: `#ffffff`,
};

export default Review;
