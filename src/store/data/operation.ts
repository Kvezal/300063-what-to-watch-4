import {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {nanoid} from "nanoid";
import {UNAUTHORIZED} from "http-status-codes";

import {EAppRoute, history} from "@app/index";
import {adaptFilm, adaptReview} from "@common/adapter";
import {ID_LENGTH} from "@common/consts";
import {IFilm, IReview, IServerFilm, IServerReview} from "@common/types";
import {IDispatch} from "@middlewares/interface";
import {TStoreAction, TStoreState} from "@store/interface";
import {getCurrentFilmId} from "@store/data/selectors";
import {addNotification} from "@store/notification/action-creator";
import {EHTTPMethod, ENotificationType} from "@store/notification/interface";

import * as ActionCreator from "./action-creator";
import {changeCommentStatus} from "./action-creator";
import {
  ECommentStatus,
  EDataErrorNotificationName,
  EDataURLHandlerPath,
  EFavoriteFilmActionType,
} from "./interface";


const loadFilms = () => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  return api
    .get<IServerFilm[]>(EDataURLHandlerPath.FILMS)
    .then((response: AxiosResponse<IServerFilm[]>): IFilm[] => response.data.map((film: IServerFilm) => adaptFilm(film)))
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

const loadPromoFilm = () => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  return api
    .get<IServerFilm>(EDataURLHandlerPath.PROMO_FILM)
    .then((response: AxiosResponse<IServerFilm>): IFilm => adaptFilm(response.data))
    .then((film: IFilm): void => {
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

const loadFilmReviews = (filmId: number) => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  const path = EDataURLHandlerPath.FILM_COMMENT.replace(`:filmId`, `${filmId}`);
  return api
    .get<IServerReview[]>(path)
    .then((response: AxiosResponse<IServerReview[]>): IReview[] => response.data.map((review: IServerReview) => adaptReview(review)))
    .then((reviews: IReview[]): void => {
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

const loadFavoriteFilms = () => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  return api
    .get<IServerFilm[]>(EDataURLHandlerPath.FAVORITE_FILM_LIST)
    .then((response: AxiosResponse<IServerFilm[]>): IFilm[] => response.data.map((films: IServerFilm) => adaptFilm(films)))
    .then((films: IFilm[]): void => {
      dispatch(ActionCreator.loadFavoriteFilms(films));
    })
    .catch((error: AxiosError): void => {
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

const postReview = (commentData, props) => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  const filmId = getCurrentFilmId(null, props);
  const path = EDataURLHandlerPath.FILM_COMMENT.replace(`:filmId`, `${filmId}`);
  return api
    .post<IServerReview>(path, commentData)
    .then((): void => {
      history.push(EAppRoute.FILM.replace(`:filmId`, `${filmId}`));
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

const changeFavoriteFilmStatus = (filmId: number, status: EFavoriteFilmActionType) => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  const path = EDataURLHandlerPath.FAVORITE_FILM.replace(`:filmId`, `${filmId}`).replace(`:status`, `${status}`);
  return api
    .post<IServerFilm>(path)
    .then((response: AxiosResponse<IServerFilm>): IFilm => adaptFilm(response.data))
    .then((film: IFilm) => {
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
      const notification = {
        id: nanoid(ID_LENGTH),
        type: ENotificationType.ERROR,
        name: EDataErrorNotificationName.FAVORITE_FILM_STATUS,
        method: EHTTPMethod.POST,
        title: status === EFavoriteFilmActionType.ADD ? `Error adding film to favorite list` : `Error deleting film from favorite list`,
        text: `Try to add film to favorite list again`,
      };
      dispatch(addNotification(notification));
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
