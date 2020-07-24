import React from "react";
import PropTypes from "prop-types";

import FilmCard from "@components/film-card/film-card";
import {withVideoPlayer} from "@common/hocs";
import {filmType} from "@common/types";


const FilmCardWrapper = withVideoPlayer(FilmCard);

const FilmList = (props) => {
  const {onCardClick, list, pack, step} = props;

  const displayedList = list.slice(0, pack * step);

  return <div className="catalog__movies-list">
    {displayedList.map((film) => <FilmCardWrapper
      key={film.id}
      filmId={film.id}
      filmName={film.name}
      source={film.source.previewVideo}
      poster={film.picture.preview}
      isPlaying={false}
      canStop={false}
      muted={true}
      onCardClick={onCardClick}
    />)}
  </div>;
};

FilmList.defaultProps = {
  step: 1,
  pack: 8,
};

FilmList.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  onCardClick: PropTypes.func.isRequired,
  pack: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default FilmList;
