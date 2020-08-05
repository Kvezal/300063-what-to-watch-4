import * as React from "react";

import {IOverviewProps} from "./interface";


const MAX_STARRING_COUNT = 4;

const Overview: React.FC<IOverviewProps> = (props: IOverviewProps) => {
  const {rating, director, description, starring} = props;

  let starringString = starring.join(`, `);
  if (starring.length > MAX_STARRING_COUNT) {
    starringString = `${starring.slice(0, MAX_STARRING_COUNT).join(`, `)} and other`;
  }

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating.score}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{rating.assessment}</span>
        <span className="movie-rating__count">{rating.count} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {starringString}</strong></p>
    </div>
  </React.Fragment>;
};

export default Overview;
