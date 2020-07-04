import React from "react";

import reviewType from "@types/review";


const Review = (props) => {
  const {ratingScore, text, author, date} = props;

  return <div className="review">
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

Review.propTypes = reviewType;

export default Review;