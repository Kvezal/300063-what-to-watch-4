import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "@app/main-page";
import filmListType from "@types/film-list";
import FilmOverview from "@app/film-overview";
import filmMockData from "@mocks/film-page-data";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
    this.state = {
      filmId: null,
    };
  }
  render() {
    const {currentFilmGenres, releaseDate, filmList} = this.props;
    const {overviewFilm} = filmMockData;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            currentFilmGenres={currentFilmGenres}
            releaseDate={releaseDate}
            filmList={filmList}
            avatar="avatar.jpg"
            onCardClick={this._handleCardClick}
          />
        </Route>
        <Route exact path="/films">
          <FilmOverview
            info={overviewFilm}
            likedFilms={filmList.slice(0, 4)}
            avatar="avatar.jpg"
            onCardClick={this._handleCardClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  _handleCardClick(filmId) {
    this.setState({filmId});
  }
}

App.propTypes = {
  currentFilmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmList: filmListType.isRequired,
};

export default App;
