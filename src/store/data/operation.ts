import {nanoid} from "nanoid";
import {Dispatch} from "redux";
import {UNAUTHORIZED} from "http-status-codes";

import {AppRoute, history} from "@app/index";
import {adaptFilm, adaptReview} from "@common/adapter";
import {IFilm, IReview, IServerFilm, IServerReview} from "@common/types";
import {ID_LENGTH} from "@store/const";
import {getCurrentFilmId} from "@store/data/selectors";
import {addNotification} from "@store/notification/action-creator";
import {ENotificationType, EHTTPMethod} from "@store/notification/interface";

import * as ActionCreator from "./action-creator";
import {changeCommentStatus} from "./action-creator";
import {
  EDataURLHandlerPath,
  ECommentStatus,
  EDataErrorNotificationName,
  EFavoriteFilmActionType,
} from "./interface";


const loadFilms = () => (dispatch: Dispatch, getState, api) => {
  return api
    .get(EDataURLHandlerPath.FILMS)
    .then((response) => response.data.map((film: IServerFilm) => adaptFilm(film)))
    .then((films: IFilm[]) => {
      dispatch(ActionCreator.loadFilms(films));
    })
    .catch(() => {
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FILMS,
        method: EHTTPMethod.GET,
        title: `Load films error`,
        text: `Try to reload page`,
      }));
    });
};

const loadPromoFilm = () => (dispatch, getState, api) => {
  return api
    .get(EDataURLHandlerPath.PROMO_FILM)
    .then((response) => adaptFilm(response.data))
    .then((film: IFilm) => {
      dispatch(ActionCreator.loadPromoFilm(film));
    })
    .catch((error) => {
      if (error.response.status === UNAUTHORIZED) {
        return;
      }
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.PROMO_FILM,
        method: EHTTPMethod.GET,
        title: `Load promo film error`,
        text: `Try to reload page`,
      }));
    });
};

const loadFilmReviews = (filmId) => (dispatch, getState, api) => {
  const path = EDataURLHandlerPath.FILM_COMMENT.replace(`:filmId`, filmId);
  return api
    .get(path)
    .then((response) => response.data.map((review: IServerReview) => adaptReview(review)))
    .then((reviews: IReview[]) => {
      dispatch(ActionCreator.loadFilmReviews(reviews));
    })
    .catch((error) => {
      if (error.response.status === UNAUTHORIZED) {
        return;
      }
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FILM_COMMENT,
        method: EHTTPMethod.GET,
        title: `Load film reviews error`,
        text: `Try to reload page`,
      }));
    });
};

const loadFavoriteFilms = () => (dispatch, getState, api) => {
  return api
    .get(EDataURLHandlerPath.FAVORITE_FILM_LIST)
    .then((response) => response.data.map((films: IServerFilm) => adaptFilm(films)))
    .then((films: IFilm[]) => dispatch(ActionCreator.loadFavoriteFilms(films)))
    .catch((error) => {
      if (error.response.status === UNAUTHORIZED) {
        return;
      }
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FAVORITE_FILM_LIST,
        method: EHTTPMethod.GET,
        title: `Load favorite films error`,
        text: `Try to reload page`,
      }));
    });
};

const postReview = (commentData, props) => (dispatch, getState, api) => {
  const filmId = getCurrentFilmId(null, props);
  const path = EDataURLHandlerPath.FILM_COMMENT.replace(`:filmId`, `${filmId}`);
  return api.post(path, commentData)
    .then(() => {
      history.push(AppRoute.FILMS.replace(`:filmId`, `${filmId}`));
    })
    .catch((error) => {
      if (error.response.status === UNAUTHORIZED) {
        return;
      }
      const notification = {
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FILM_COMMENT,
        method: EHTTPMethod.POST,
        title: `Post film comment error`,
        text: `Try to send comment again`,
      };
      dispatch([
        changeCommentStatus(ECommentStatus.ERROR),
        addNotification(notification)
      ]);
    });
};

const changeFavoriteFilmStatus = (filmId, status) => (dispatch, getState, api) => {
  const path = EDataURLHandlerPath.FAVORITE_FILM.replace(`:filmId`, filmId).replace(`:status`, status);
  return api.post(path)
    .then((response) => adaptFilm(response.data))
    .then((film) => {
      const favoriteFilmAction = film.isFavorite ? ActionCreator.addFavoriteFilm : ActionCreator.removeFavoriteFilm;
      dispatch([
        favoriteFilmAction(film),
        ActionCreator.updateFilm(film),
        ActionCreator.updatePromoFilm(film)
      ]);
    })
    .catch((error) => {
      if (error.response.status === UNAUTHORIZED) {
        return;
      }
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FAVORITE_FILM_STATUS,
        method: EHTTPMethod.POST,
        title: status === EFavoriteFilmActionType.ADD ? `Error adding film to favorite list` : `Error deleting film from favorite list`,
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
