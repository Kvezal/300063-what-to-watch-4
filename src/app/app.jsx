import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import filmMockData from "@mocks/film-page-data";
import filmListType from "@types/film-list";
import MainPage from "@app/main-page";
import FilmDescription from "@app/film-overview";
import {withTabs} from "@hocs";
import reviews from "@mocks/reviews";

const FilmDescriptionWrapper = withTabs(FilmDescription);


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
          <FilmDescriptionWrapper
            info={overviewFilm}
            likedFilms={filmList.slice(0, 4)}
            avatar="avatar.jpg"
            onCardClick={this._handleCardClick}
            baseTab="overview"
            reviews={reviews}
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
