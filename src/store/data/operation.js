import {nanoid} from "nanoid";
import {adaptFilm, adaptReview} from "@common/adapter";
import {getFilmId} from "@store/data/selectors";

import * as ActionCreator from "./action-creator";


const ID_LENGTH = 10;

const convertError = (error, title) => ({
  id: nanoid(ID_LENGTH),
  type: `error`,
  title,
  text: `Try to reload page`,
  httpCode: error.response.status,
});

const loadFilms = () => (dispatch, getState, api) => {
  return api
    .get(`/films`)
    .then((response) => response.data.map((film) => adaptFilm(film)))
    .then((films) => {
      dispatch(ActionCreator.loadFilms(films));
    })
    .catch((error) => {
      dispatch(ActionCreator.addErrorNotification(
          convertError(error, `Load films error`)
      ));
    });
};

const loadPromoFilm = () => (dispatch, getState, api) => {
  return api
    .get(`/films/promo`)
    .then((response) => adaptFilm(response.data))
    .then((film) => {
      dispatch(ActionCreator.loadPromoFilm(film));
    })
    .catch((error) => {
      dispatch(ActionCreator.addErrorNotification(
          convertError(error, `Load promo film error`)
      ));
    });
};

const loadFilmReviews = () => (dispatch, getState, api) => {
  return api
    .get(`/comments/${getFilmId(getState())}`)
    .then((response) => response.data.map((reviews) => adaptReview(reviews)))
    .then((reviews) => {
      dispatch(ActionCreator.loadFilmReviews(reviews));
    })
    .catch((error) => {
      dispatch(ActionCreator.addErrorNotification(
          convertError(error, `Load film reviews error`)
      ));
    });
};

export {
  loadFilms,
  loadPromoFilm,
  loadFilmReviews,
};
