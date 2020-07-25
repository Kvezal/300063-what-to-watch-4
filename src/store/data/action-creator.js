import {ActionType} from "./const";


const chooseGenre = (genre) => ({
  type: ActionType.CHOOSE_GENRE,
  payload: genre,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const chooseFilmId = (filmId) => ({
  type: ActionType.CHOOSE_FILM_ID,
  payload: filmId,
});

const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

const loadFilmReviews = (reviews) => ({
  type: ActionType.LOAD_FILM_REVIEWS,
  payload: reviews,
});

export {
  chooseGenre,
  loadFilms,
  chooseFilmId,
  loadPromoFilm,
  loadFilmReviews,
};
