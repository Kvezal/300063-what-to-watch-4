import {nanoid} from "nanoid";

import AppRoute from "@app/app-route";
import history from "@app/history";
import {adaptUser} from "@common/adapter";
import {IServerUser, IUser} from "@common/types";
import {ID_LENGTH} from "@store/const";
import {loadFavoriteFilms} from "@store/data/operation";
import {addNotification, resetNotification} from "@store/notification/action-creator";
import {EHTTPMethod, ENotificationType} from "@store/notification/interface";

import {setAuthorizationStatus, setUser} from "./action-creator";
import {EAuthorizationStatus, EUserURLHandlerPath, EUserErrorNotificationName} from "./interface";


const checkAuth = () => (dispatch, getState, api) => {
  return api.get(EUserURLHandlerPath.LOGIN)
    .then((response) => adaptUser(response.data as IServerUser))
    .then((user: IUser) => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(EAuthorizationStatus.AUTH)
      ]);
    });
};

const login = (authData) => (dispatch, getState, api) => {
  return api.post(EUserURLHandlerPath.LOGIN, {
    email: authData.email,
    password: authData.password,
  })
    .then((response) => adaptUser(response.data))
    .then((user: IUser) => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(EAuthorizationStatus.AUTH),
        resetNotification(),
        loadFavoriteFilms()
      ]);
      history.push(AppRoute.ROOT);
    })
    .catch(() => {
      const notification = {
        id: nanoid(ID_LENGTH),
        type: ENotificationType.HIDDEN,
        name: EUserErrorNotificationName.EMAIL,
        method: EHTTPMethod.POST,
        title: `Email is invalid`,
        text: `Enter correct email and try to post again`,
      };
      dispatch([
        setAuthorizationStatus(EAuthorizationStatus.NO_AUTH),
        addNotification(notification)
      ]);
    });
};

export {
  checkAuth,
  login,
};
