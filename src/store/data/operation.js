import {nanoid} from "nanoid";

import {AppRoute, history} from "@app";
import {adaptFilm, adaptReview} from "@common/adapter";
import {ID_LENGTH} from "@store/const";
import {FavoriteFilmStatus} from "@store/data/const";
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

const loadFilmReviews = (filmId) => (dispatch, getState, api) => {
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

const loadFavoriteFilms = () => (dispatch, getState, api) => {
  return api
    .get(URLHandlerPath.FAVORITE_FILM_LIST)
    .then((response) => response.data.map((films) => adaptFilm(films)))
    .then((reviews) => dispatch(ActionCreator.loadFavoriteFilms(reviews)))
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.FAVORITE_FILM_LIST,
        method: HTTPMethod.GET,
        title: `Load favorite films error`,
        text: `Try to reload page`,
      }));
    });
};

const postReview = (commentData, props) => (dispatch, getState, api) => {
  const filmId = getCurrentFilmId(null, props);
  const path = URLHandlerPath.FILM_COMMENT.replace(`:filmId`, filmId);
  return api.post(path, commentData)
    .then(() => {
      history.push(AppRoute.FILMS.replace(`:filmId`, filmId));
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

const changeFavoriteFilmStatus = (filmId, status) => (dispatch, getState, api) => {
  const path = URLHandlerPath.FAVORITE_FILM.replace(`:filmId`, filmId).replace(`:status`, status);
  return api.post(path)
    .then((response) => adaptFilm(response.data))
    .then((film) => dispatch(ActionCreator.updateFilm(film)))
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.ERROR,
        name: DataErrorNotificationName.FAVORITE_FILM_STATUS,
        method: HTTPMethod.POST,
        title: status === FavoriteFilmStatus.ADD ? `Error adding film to favorite list` : `Error deleting film from favorite list`,
        text: `Try to add film to favorite list again`,
      }));
    });
};

export {
  loadFilms,
  loadPromoFilm,
  loadFilmReviews,
  postReview,
  loadFavoriteFilms,
  changeFavoriteFilmStatus,
};
