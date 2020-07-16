import NameSpace from "../name-space.js";
import {GenreEnum} from "@common/enums";


const NAME_SPACE = NameSpace.DATA;

const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

const getFilteredFilmsByGenre = (state) => {
  if (state[NAME_SPACE].genre === GenreEnum.ALL) {
    return state[NAME_SPACE].films;
  }
  return state[NAME_SPACE].films
    .filter((film) => film.genre === state[NAME_SPACE].genre);
};

const getFilmById = (state) => {
  return state[NAME_SPACE].films
    .find((film) => film.id === state[NAME_SPACE].currentFilmId);
};

const getReviews = (state) => {
  return state[NAME_SPACE].filmReviews;
};

const getFilmId = (state) => {
  return state[NAME_SPACE].currentFilmId;
};

const getNotifications = (state) => {
  return state[NAME_SPACE].notifications;
};

export {getPromoFilm, getFilteredFilmsByGenre, getFilmById, getReviews, getFilmId, getNotifications};
