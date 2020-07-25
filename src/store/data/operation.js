import {nanoid} from "nanoid";
import {adaptFilm, adaptReview} from "@common/adapter";
import {ID_LENGTH} from "@store/const";
import {getCurrentFilmId} from "@store/data/selectors";
import {addNotification} from "@store/notification/action-creator";
import {NotificationType, HTTPMethod} from "@store/notification/const";

import * as ActionCreator from "./action-creator";
import {DataErrorNotificationName, URLHandlerPath} from "./const";


const loadFilms = () => (dispatch, getState, api) => {
  return api
    .get(URLHandlerPath.FILMS)
    .then((response) => response.data.map((film) => adaptFilm(film)))
    .then((films) => {
      dispatch(ActionCreator.loadFilms(films));
    })
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.FILMS,
        method: HTTPMethod.GET,
        title: `Load films error`,
        text: `Try to reload page`,
      }));
    });
};

const loadPromoFilm = () => (dispatch, getState, api) => {
  return api
    .get(URLHandlerPath.PROMO_FILM)
    .then((response) => adaptFilm(response.data))
    .then((film) => {
      dispatch(ActionCreator.loadPromoFilm(film));
    })
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.PROMO_FILM,
        method: HTTPMethod.GET,
        title: `Load promo film error`,
        text: `Try to reload page`,
      }));
    });
};

const loadFilmReviews = () => (dispatch, getState, api) => {
  const filmId = getCurrentFilmId(getState());
  const path = URLHandlerPath.FILM_COMMENT.replace(`:filmId`, filmId);
  return api
    .get(path)
    .then((response) => response.data.map((reviews) => adaptReview(reviews)))
    .then((reviews) => {
      dispatch(ActionCreator.loadFilmReviews(reviews));
    })
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.FILM_COMMENT,
        method: HTTPMethod.GET,
        title: `Load film reviews error`,
        text: `Try to reload page`,
      }));
    });
};

const postReview = (commentData) => (dispatch, getState, api) => {
  const filmId = getCurrentFilmId(getState());
  const path = URLHandlerPath.FILM_COMMENT.replace(`:filmId`, filmId);
  return api.post(path, commentData)
    .then(() => {
      window.location.href = `/films/${filmId}`;
    })
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.FILM_COMMENT,
        method: HTTPMethod.POST,
        title: `Post film comment error`,
        text: `Try to reload page`,
      }));
    });
};

export {
  loadFilms,
  loadPromoFilm,
  loadFilmReviews,
  postReview,
};
