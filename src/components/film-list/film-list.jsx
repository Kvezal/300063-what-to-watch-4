import React from "react";

import FilmListType from "@types/film-list";
import FilmCard from "@components/film-card";


const FilmList = (props) => {
  const {list} = props;

  return <div className="catalog__movies-list">
    {list.map((film) => <FilmCard
      key={film.id}
      info={film}
    />)}
  </div>;
};

FilmList.propTypes = {
  list: FilmListType,
};

export default FilmList;
