import {createSelector} from "reselect";

import {EGenre} from "@common/enums";
import ENameSpace from "@store/name-space";
import {FilmInterface} from "@common/types";
import ReviewInterface from "@common/types/review";
import {ECommentStatus} from "./interface";
import {TStoreState} from "@store/interface";


const NAME_SPACE = ENameSpace.DATA;

const getFilms = (state: TStoreState): FilmInterface[] => {
  return state[NAME_SPACE].films;
};

const getPromoFilm = (state: TStoreState): FilmInterface => {
  return state[NAME_SPACE].promoFilm;
};

const getCurrentFilmId = (state: TStoreState, props): number => {
  return Number(props.match.params.filmId);
};

const getHash = (state: TStoreState, props): string => {
  return decodeURIComponent(props.location.hash);
};

const getReviews = (state: TStoreState): ReviewInterface[] => {
  return state[NAME_SPACE].filmReviews;
};

const getFavoriteFilms = (state: TStoreState): FilmInterface[] => {
  return state[NAME_SPACE].favoriteFilms;
};

const getCommentStatus = (state: TStoreState): ECommentStatus => {
  return state[NAME_SPACE].commentStatus;
};

const getCurrentGenre = createSelector(
    getHash,
    (hash) => {
      return (hash.replace(`#`, ``) as EGenre) || EGenre.ALL;
    }
);

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
      if (!films || genre === EGenre.ALL) {
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
  getCommentStatus,
  getLikedFilms,
  getCurrentFilm,
  getFilteredFilmsByGenre,
  getCurrentFilmVideoSource,
  getCurrentFilmPicturePreview,
};
