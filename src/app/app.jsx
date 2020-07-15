import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import MainPage from "@app/main-page/main-page";
import FilmDescription from "@app/film-description/film-description";
import Player from "@app/player/player";
import {FilmOverviewTabsEnum} from "@common/enums";
import {withActiveFlag, withActiveTab, withStep, withVideoPlayer} from "@common/hocs";
import {filmType, reviewType} from "@common/types";
import {DataActionCreator, getFilmById, getFilteredFilmsByGenre, getPromoFilm, getReviews} from "@store";


const FilmDescriptionWrapper = withActiveTab(FilmDescription);
const MainPageWrapper = withActiveTab(withStep(MainPage));
const PlayerWrapper = withActiveFlag(withVideoPlayer(Player));

const App = (props) => {
  const {films, promoFilm, currentFilm, reviews, onFilmChoose, chooseFilmsWithGenre} = props;

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

  const getMainPage = () => {
    if (!promoFilm) {
      return <Fragment/>;
    }
    return <MainPageWrapper
      promoFilm={promoFilm}
      films={films}
      avatar="avatar.jpg"
      onCardClick={onFilmChoose}
      tabList={filmFilters}
      activeTab={filmFilters[0].id}
      onActiveTabChange={(id) => chooseFilmsWithGenre(id)}
    />;
  };

  const getFilmDescriptionPage = () => {
    if (!currentFilm) {
      return <Fragment/>;
    }
    return <FilmDescriptionWrapper
      info={currentFilm}
      likedFilms={films.slice(0, 4)}
      avatar="avatar.jpg"
      onCardClick={onFilmChoose}
      baseTab="overview"
      reviews={reviews}
      tabList={filmDescriptionTabList}
      activeTab={filmDescriptionTabList[0].id}
    />;
  };

  const getPlayerPage = () => {
    if (!currentFilm) {
      return <Fragment/>;
    }
    return <PlayerWrapper
      source={currentFilm.source.video}
      poster={currentFilm.picture.poster}
      muted={false}
    />;
  };

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {getMainPage()}
      </Route>
      <Route exact path="/films">
        {getFilmDescriptionPage()}
      </Route>
      <Route exact path="/player">
        {getPlayerPage()}
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  currentFilm: PropTypes.shape(filmType).isRequired,
  promoFilm: PropTypes.shape(filmType).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ).isRequired,
  onFilmChoose: PropTypes.func.isRequired,
  chooseFilmsWithGenre: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewType)
  ).isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  currentFilm: getFilmById(state),
  promoFilm: getPromoFilm(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(DataActionCreator.chooseFilmId(filmId));
  },

  chooseFilmsWithGenre: (genre) => {
    dispatch(DataActionCreator.chooseGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
