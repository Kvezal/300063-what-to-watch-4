import React, {Fragment} from "react";
import PropTypes from "prop-types";


const Details = (props) => {
  const {director, starring, runTime, genres, releaseDate} = props;
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
          {starring && starring.map((star, index) =>
            <Fragment key={index}>
              {`${star}${maxStarringIndex >= index ? `,` : ``}`} <br/>
            </Fragment>
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
        <span className="movie-card__details-value">{genres}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{releaseDate}</span>
      </p>
    </div>
  </div>;
};

Details.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  runTime: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string
  ),
  releaseDate: PropTypes.number.isRequired,
};

export default Details;
