import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import filmMockData from "@mocks/film-page-data";
import reviews from "@mocks/reviews";
import promoFilm from "@mocks/promo-film";
import {withTabs, withStep} from "@hocs";
import MainPage from "@app/main-page";
import FilmDescription from "@app/film-description";
import {filmListType} from "@types";
import {ActionCreator} from "@reducer";


const FilmDescriptionWrapper = withTabs(FilmDescription);
const MainPageWrapper = withStep(MainPage);

const App = (props) => {
  const {films, onFilmChoose, genre, onGenreChoose} = props;
  const {overviewFilm} = filmMockData;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPageWrapper
          promoFilm={promoFilm}
          films={films}
          avatar="avatar.jpg"
          genre={genre}
          onCardClick={onFilmChoose}
          onFilterClick={onGenreChoose}
        />
      </Route>
      <Route exact path="/films">
        <FilmDescriptionWrapper
          info={overviewFilm}
          likedFilms={films.slice(0, 4)}
          avatar="avatar.jpg"
          onCardClick={onFilmChoose}
          baseTab="overview"
          reviews={reviews}
        />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  films: filmListType.isRequired,
  onFilmChoose: PropTypes.func.isRequired,
  onGenreChoose: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.filteredFilms,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(ActionCreator.chooseFilm(filmId));
  },
  onGenreChoose: (genre) => {
    dispatch(ActionCreator.changeFilteredGenre(genre));
    dispatch(ActionCreator.updateFilmList());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
