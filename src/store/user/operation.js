import {nanoid} from "nanoid";

import {ID_LENGTH} from "@store/const";
import {addNotification} from "@store/notification/action-creator";
import {HTTPMethod, NotificationType} from "@store/notification/const";

import {setAuthorizationStatus, setUser} from "./action-creator";
import {AuthorizationStatus, UserErrorNotificationName} from "./const";
import {adaptUser} from "@common/adapter";


const checkAuth = () => (dispatch, getState, api) => {
  return api.get(`/login `)
    .then((response) => adaptUser(response.data))
    .then((user) => {
      dispatch(setUser(user));
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    });
};

const login = (authData) => (dispatch, getState, api) => {
  return api.post(`/login`, {
    email: authData.email,
    password: authData.password,
  })
    .then((response) => adaptUser(response.data))
    .then((user) => {
      dispatch(setUser(user));
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      window.location.href = `/`;
    })
    .catch(() => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      dispatch(addNotification({
        id: nanoid(ID_LENGTH),
        type: NotificationType.HIDDEN,
        name: UserErrorNotificationName.EMAIL,
        method: HTTPMethod.POST,
        title: `Email is invalid`,
        text: `Enter correct email and try to post again`,
      }));
    });
};

export {
  checkAuth,
  login,
};
