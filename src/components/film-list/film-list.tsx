import * as React from "react";

import FilmCard from "@components/film-card/film-card";
import {withVideoPlayer} from "@hocs/index";

import {IFilmListProps} from "./interface";


const FilmCardWrapper = withVideoPlayer(FilmCard);

const FilmList: React.FC<IFilmListProps> = (props) => {
  const {onCardClick, list, pack = 0, step = 1} = props;

  const displayedList = list.slice(0, pack * step || list.length - 1);

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

export default FilmList;
