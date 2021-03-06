import * as React from "react";

import {IDetailsProps} from "./interface";


const Details: React.FC<IDetailsProps> = (props: IDetailsProps) => {
  const {director, starring, runTime, genre, releaseDate} = props;
  const maxStarringIndex = starring && starring.length - 1;
  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {starring.map((star, index) =>
            <React.Fragment key={index}>
              {`${star}${maxStarringIndex - 1 >= index ? `,` : ``}`}<br/>
            </React.Fragment>
          )}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{runTime}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{releaseDate}</span>
      </p>
    </div>
  </div>;
};


export default Details;
