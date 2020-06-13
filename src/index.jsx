import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app";

import mock from "./mock";


const root = document.querySelector(`#root`);

const {currentFilmGenres, releaseDate, filmList} = mock;

ReactDOM.render(
    <App
      currentFilmGenres={currentFilmGenres}
      releaseDate={releaseDate}
      filmList={filmList}
    />,
    root
);
