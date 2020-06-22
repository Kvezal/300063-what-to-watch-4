import React from "react";
import PropTypes from "prop-types";

import MainPage from "@app/main-page";
import fileType from "@types/film";


const App = (props) => {
  const {currentFilmGenres, releaseDate, filmList} = props;

  return <MainPage
    currentFilmGenres={currentFilmGenres}
    releaseDate={releaseDate}
    filmList={filmList}
    onMainTitleClick={() => {}}
  />;
};

App.propTypes = {
  currentFilmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmList: PropTypes.arrayOf(fileType).isRequired,
};

export default App;