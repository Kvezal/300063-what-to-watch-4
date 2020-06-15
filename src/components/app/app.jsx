import React from "react";
import PropTypes from "prop-types";

import MainPage from "@components/main-page";


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
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default App;
