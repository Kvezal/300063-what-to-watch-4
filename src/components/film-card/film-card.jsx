import React from "react";
import PropTypes from "prop-types";

import FileType from "@types/film";
import VideoPlayer from "@components/video-player/video-player";


const VIDEO_PLAYING_DELAY = 1000;

const FilmCard = (props) => {
  const {onCardClick, info, isActive, onActiveChange} = props;
  const {id, preview, poster, title, href} = info;

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
    onClick={() => onCardClick(id)}
    onMouseEnter={handleCardMouseEnter}
    onMouseLeave={handleCardMouseLeave}
  >
    <div className="small-movie-card__image">
      <VideoPlayer
        source={preview}
        poster={poster}
        isPlaying={isActive}
        muted={true}/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={href}>{title}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  info: PropTypes.shape(FileType).isRequired,
  onCardClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};

export default FilmCard;
