import React from "react";
import PropTypes from "prop-types";


const VIDEO_PLAYING_DELAY = 1000;

const FilmCard = (props) => {
  const {filmId, filmName, onCardClick, onActiveChange, renderPlayer} = props;

  let timer = 0;

  const handleCardMouseEnter = () => {
    timer = setTimeout(() => {
      onActiveChange();
      clearTimeout(timer);
    }, VIDEO_PLAYING_DELAY);
  };

  const handleCardMouseLeave = () => {
    if (!timer) {
      onActiveChange();
    } else {
      clearTimeout(timer);
    }
  };

  return <article
    className="small-movie-card catalog__movies-card"
    onClick={() => onCardClick(filmId)}
    onMouseEnter={handleCardMouseEnter}
    onMouseLeave={handleCardMouseLeave}
  >
    <div className="small-movie-card__image">
      {renderPlayer()}
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link">{filmName}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default FilmCard;
