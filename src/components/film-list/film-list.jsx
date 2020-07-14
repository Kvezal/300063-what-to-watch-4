import React from "react";
import PropTypes from "prop-types";

import FilmListType from "@types/film-list";
import FilmCard from "@components/film-card";
import {withActiveFlag, withVideoPlayer} from "@hocs";

const FilmCardWrapper = withActiveFlag(withVideoPlayer(FilmCard));


const FilmList = (props) => {
  const {onCardClick, list, pack, step} = props;

  const displayedList = list.slice(0, pack * step);

  return <div className="catalog__movies-list">
    {displayedList.map((film) => <FilmCardWrapper
      key={film.id}
      info={film}
      onCardClick={onCardClick}
    />)}
  </div>;
};

FilmList.defaultProps = {
  step: 1,
  pack: 8,
};

FilmList.propTypes = {
  list: FilmListType,
  onCardClick: PropTypes.func.isRequired,
  pack: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default FilmList;
