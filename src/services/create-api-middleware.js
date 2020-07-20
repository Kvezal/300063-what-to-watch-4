import {nanoid} from "nanoid";

import {ID_LENGTH} from "@store/const";
import {HTTPMethod, NotificationType} from "@store/notification/const";
import {addNotification} from "@store/notification/action-creator";

import {APIErrorName, HTTPErrorCode} from "./const";


const createAPIMiddleware = (api) => ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === `function`) {
    return action(dispatch, getState, api)
      .catch((error) => {
        const {response} = error;
        if (response.status === HTTPErrorCode.UNAUTHORIZED) {
          dispatch(addNotification({
            id: nanoid(ID_LENGTH),
            type: NotificationType.ERROR,
            name: APIErrorName.UNAUTHORIZED,
            method: HTTPMethod.GET,
            title: `Authorization error`,
            text: `You should authorize`,
          }));
        }
        throw error;
      });
  }
  return next(action);
};

export default createAPIMiddleware;
