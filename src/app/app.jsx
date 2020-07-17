import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import filmMockData from "@mocks/film-page-data";
import reviews from "@mocks/reviews";
import promoFilm from "@mocks/promo-film";
import {withActiveTab, withStep} from "@hocs";
import MainPage from "@app/main-page";
import FilmDescription from "@app/film-description";
import {filmListType} from "@types";
import {ActionCreator} from "@reducer";
import FilmOverviewTabsEnum from "@enums/film-overview-tabs";


const FilmDescriptionWrapper = withActiveTab(FilmDescription);
const MainPageWrapper = withActiveTab(withStep(MainPage));

const App = (props) => {
  const {films, onFilmChoose, chooseFilmsWithGenre} = props;
  const {overviewFilm} = filmMockData;

  const filmDescriptionTabList = [
    {name: `Overview`, id: FilmOverviewTabsEnum.OVERVIEW},
    {name: `Details`, id: FilmOverviewTabsEnum.DETAILS},
    {name: `Reviews`, id: FilmOverviewTabsEnum.REVIEWS},
  ];

  const filmFilters = [
    {name: `All genres`, id: `All genres`},
    {name: `Comedies`, id: `Comedy`},
    {name: `Crime`, id: `Crime`},
    {name: `Documentary`, id: `Documentary`},
    {name: `Dramas`, id: `Drama`},
    {name: `Horror`, id: `Horror`},
    {name: `Kids & Family`, id: `Kids & Family`},
    {name: `Romance`, id: `Romance`},
    {name: `Sci-Fi`, id: `Sci-Fi`},
    {name: `Thrillers`, id: `Thriller`}
  ];

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPageWrapper
          promoFilm={promoFilm}
          films={films}
          avatar="avatar.jpg"
          onCardClick={onFilmChoose}
          tabList={filmFilters}
          activeTab={filmFilters[0].id}
          onActiveTabChange={(id) => chooseFilmsWithGenre(id)}
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
          tabList={filmDescriptionTabList}
          activeTab={filmDescriptionTabList[0].id}
        />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  films: filmListType.isRequired,
  onFilmChoose: PropTypes.func.isRequired,
  chooseFilmsWithGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.filteredFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(ActionCreator.chooseFilm(filmId));
  },
  chooseFilmsWithGenre: (genre) => {
    dispatch(ActionCreator.chooseFilmsWithGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
