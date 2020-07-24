import {createSelector} from "reselect";

import {EGenre} from "@common/enums";
import NameSpace from "@store/name-space.js";


const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

const getCurrentFilmId = (state, props) => {
  return Number(props.match.params.filmId);
};

const getCurrentGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getReviews = (state) => {
  return state[NAME_SPACE].filmReviews;
};

const getFavoriteFilms = (state) => {
  return state[NAME_SPACE].favoriteFilms;
};

const getCurrentFilm = createSelector(
    getFilms,
    getCurrentFilmId,
    (films, filmId) => {
      return films && films.find((film) => film.id === filmId);
    }
);

const getLikedFilms = createSelector(
    getFilms,
    getCurrentFilm,
    (films, currentFilm) => {
      if (!currentFilm) {
        return [];
      }
      return films
        .filter((film) => film.genre === currentFilm.genre && film.id !== currentFilm.id)
        .slice(0, 4);
    }
);

const getFilteredFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => {
      if (genre === EGenre.ALL) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    }
);

const getCurrentFilmVideoSource = createSelector(
    getCurrentFilm,
    (film) => film && film.source.video
);

const getCurrentFilmPicturePreview = createSelector(
    getCurrentFilm,
    (film) => film && film.picture.preview
);


export {
  getFilms,
  getPromoFilm,
  getReviews,
  getCurrentFilmId,
  getFavoriteFilms,
  getLikedFilms,
  getCurrentFilm,
  getFilteredFilmsByGenre,
  getCurrentFilmVideoSource,
  getCurrentFilmPicturePreview,
};
