import {nanoid} from "nanoid";

import AppRoute from "@app/app-route";
import history from "@app/history";
import {adaptUser} from "@common/adapter";
import {ID_LENGTH} from "@store/const";
import {addNotification, resetNotification} from "@store/notification/action-creator";
import {HTTPMethod, NotificationType} from "@store/notification/const";

import {setAuthorizationStatus, setUser} from "./action-creator";
import {AuthorizationStatus, URLHandlerPath, UserErrorNotificationName} from "./const";


const checkAuth = () => (dispatch, getState, api) => {
  return api.get(URLHandlerPath.LOGIN)
    .then((response) => adaptUser(response.data))
    .then((user) => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(AuthorizationStatus.AUTH)
      ]);
    });
};

const login = (authData) => (dispatch, getState, api) => {
  return api.post(URLHandlerPath.LOGIN, {
    email: authData.email,
    password: authData.password,
  })
    .then((response) => adaptUser(response.data))
    .then((user) => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(AuthorizationStatus.AUTH),
        resetNotification()
      ]);
      history.push(AppRoute.ROOT);
    })
    .catch(() => {
      const notification = {
        id: nanoid(ID_LENGTH),
        type: NotificationType.HIDDEN,
        name: UserErrorNotificationName.EMAIL,
        method: HTTPMethod.POST,
        title: `Email is invalid`,
        text: `Enter correct email and try to post again`,
      };
      dispatch([
        setAuthorizationStatus(AuthorizationStatus.NO_AUTH),
        addNotification(notification),
      ]);
    });
};

export {
  checkAuth,
  login,
};
