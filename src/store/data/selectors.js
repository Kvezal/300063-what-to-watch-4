import {createSelector} from "reselect";

import {GenreEnum} from "@common/enums";
import NameSpace from "@store/name-space.js";


const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

const getCurrentFilmId = (state) => {
  return state[NAME_SPACE].currentFilmId;
};

const getCurrentGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getFilmId = (state) => {
  return state[NAME_SPACE].currentFilmId;
};

const getReviews = (state) => {
  return state[NAME_SPACE].filmReviews;
};

const getFilmById = createSelector(
    getFilms,
    getCurrentFilmId,
    (films, filmId) => {
      return films.find((film) => film.id === filmId);
    }
);

const getLikedFilms = createSelector(
    getFilms,
    getFilmById,
    (films, currentFilm) => {
      if (!currentFilm) {
        return [];
      }
      return films
        .filter((film) => film.genre === currentFilm.genre)
        .slice(0, 4);
    }
);

const getFilteredFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => {
      if (genre === GenreEnum.ALL) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    }
);

export {
  getFilms,
  getPromoFilm,
  getReviews,
  getFilmId,
  getLikedFilms,
  getFilmById,
  getFilteredFilmsByGenre,
};
