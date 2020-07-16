import ActionType from "./action-type";

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

const addErrorNotification = (error) => ({
  type: ActionType.ADD_ERROR_NOTIFICATION,
  payload: error,
});

const removeNotification = (notificationId) => ({
  type: ActionType.REMOVE_NOTIFICATION,
  payload: notificationId,
});

export {
  chooseGenre,
  loadFilms,
  chooseFilmId,
  loadPromoFilm,
  loadFilmReviews,
  addErrorNotification,
  removeNotification,
};
