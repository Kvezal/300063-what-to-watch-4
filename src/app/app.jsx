import React from "react";
import PropTypes from "prop-types";

import MainPage from "@app/main-page";
import filmListType from "@types/film-list";


const App = (props) => {
  const {currentFilmGenres, releaseDate, filmList} = props;

  return <MainPage
    currentFilmGenres={currentFilmGenres}
    releaseDate={releaseDate}
    filmList={filmList}
  />;
};

App.propTypes = {
  currentFilmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmList: filmListType.isRequired,
};

export default App;
