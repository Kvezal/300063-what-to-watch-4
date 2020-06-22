import React from "react";
import ReactDOM from "react-dom";

import App from "@app";
import filmPageData from "@mocks/film-page-data";
import films from "@mocks/films";


const root = document.querySelector(`#root`);

const {currentFilmGenres, releaseDate} = filmPageData;

ReactDOM.render(
    <App
      currentFilmGenres={currentFilmGenres}
      releaseDate={releaseDate}
      filmList={films}
    />,
    root
);
