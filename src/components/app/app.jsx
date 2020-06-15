import React from "react";

import MainPage from "@components/main-page";
import Models from "@models";


const App = (props) => {
  const {currentFilmGenres, releaseDate, filmList} = props;

  return <MainPage
    currentFilmGenres={currentFilmGenres}
    releaseDate={releaseDate}
    filmList={filmList}
  />;
};

App.propTypes = Models.mainPageModel;

export default App;
