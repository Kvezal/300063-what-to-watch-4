import {createSelector} from "reselect";

import {ALL_GENRES} from "@common/consts";
import {IFilm, IReview} from "@common/types";
import {TStoreState} from "@store/interface";
import ENameSpace from "@store/name-space";

import {ECommentStatus} from "./interface";


const NAME_SPACE = ENameSpace.DATA;

const getFilms = (state: TStoreState): IFilm[] => {
  return state[NAME_SPACE].films;
};

const getPromoFilm = (state: TStoreState): IFilm => {
  return state[NAME_SPACE].promoFilm;
};

const getCurrentFilmId = (state: TStoreState, props): number => {
  return Number(props.match.params.filmId);
};

const getHash = (state: TStoreState, props): string => {
  return decodeURIComponent(props.location.hash);
};

const getReviews = (state: TStoreState): IReview[] => {
  return state[NAME_SPACE].filmReviews;
};

const getFavoriteFilms = (state: TStoreState): IFilm[] => {
  return state[NAME_SPACE].favoriteFilms;
};

const getCommentStatus = (state: TStoreState): ECommentStatus => {
  return state[NAME_SPACE].commentStatus;
};

const getCurrentGenre = createSelector(
    getHash,
    (hash: string): string => {
      return hash.replace(`#`, ``) || ALL_GENRES;
    }
);

const getCurrentFilm = createSelector(
    getFilms,
    getCurrentFilmId,
    (films: IFilm[], filmId: number): IFilm => {
      return films && films.find((film: IFilm) => film.id === filmId);
    }
);

const getCurrentFilmName = createSelector(
    getCurrentFilm,
    (film: IFilm): string => {
      return film && film.name;
    }
);

const getLikedFilms = createSelector(
    getFilms,
    getCurrentFilm,
    (films: IFilm[], currentFilm: IFilm): IFilm[] => {
      if (!currentFilm) {
        return [];
      }
      return films
        .filter((film: IFilm) => film.genre === currentFilm.genre && film.id !== currentFilm.id)
        .slice(0, 4);
    }
);

const getFilteredFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (films: IFilm[], genre: string): IFilm[] => {
      if (!films || genre === ALL_GENRES) {
        return films;
      }
      return films.filter((film: IFilm) => film.genre === genre);
    }
);

const getCurrentFilmVideoSource = createSelector(
    getCurrentFilm,
    (film: IFilm): string => film && film.source.video
);

const getCurrentFilmPicturePreview = createSelector(
    getCurrentFilm,
    (film: IFilm): string => film && film.picture.preview
);

const getFilmGenres = createSelector(
    getFilms,
    (films: IFilm[]): string[] => {
      if (!films || films.length === 0) {
        return [];
      }
      return films.reduce((genres: string[], film: IFilm) => {
        if (genres.includes(film.genre)) {
          return genres;
        }
        return genres.concat(film.genre);
      }, []);
    }
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
  getCurrentFilmName,
  getFilmGenres,
};
