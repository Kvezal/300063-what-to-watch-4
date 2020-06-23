import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "@app/main-page";
import filmListType from "@types/film-list";
import FilmOverview from "@app/film-overview";
import filmMockData from "@mocks/film-page-data";


const App = (props) => {
  const {currentFilmGenres, releaseDate, filmList} = props;
  const {overviewFilm} = filmMockData;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPage
          currentFilmGenres={currentFilmGenres}
          releaseDate={releaseDate}
          filmList={filmList}
          avatar="avatar.jpg"
        />;
      </Route>
      <Route exact path="/films">
        <FilmOverview
          info={overviewFilm}
          likedFilms={filmList.slice(0, 4)}
          avatar="avatar.jpg"
        />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  currentFilmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmList: filmListType.isRequired,
};

export default App;
