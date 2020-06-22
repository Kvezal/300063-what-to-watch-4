import React from "react";

import FileType from "@types/film";


const FilmCard = (props) => {
  const {id, picture, title, href} = props.info;

  return <article key={id} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={`img/${picture}`} alt={title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={href}>{title}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = FileType;

export default FilmCard;
