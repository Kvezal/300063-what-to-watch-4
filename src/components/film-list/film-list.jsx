import React from "react";
import PropTypes from "prop-types";

import FilmListType from "@types/film-list";
import FilmCard from "@components/film-card";
import withActiveFlag from "@hocs/with-active-flag";

const FilmCardWrapper = withActiveFlag(FilmCard);


const FilmList = (props) => {
  const {onCardClick, list} = props;

  return <div className="catalog__movies-list">
    {list.map((film) => <FilmCardWrapper
      key={film.id}
      info={film}
      onCardClick={onCardClick}
    />)}
  </div>;
};

FilmList.propTypes = {
  list: FilmListType,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmList;
