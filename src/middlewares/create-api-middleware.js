import {nanoid} from "nanoid";
import {UNAUTHORIZED} from "http-status-codes";

import {ID_LENGTH} from "@store/const";
import {HTTPMethod, NotificationType} from "@store/notification/const";
import {APIErrorName} from "@services/const";
import {addNotification} from "@store/notification/action-creator";
import {setAuthorizationStatus} from "@store/user/action-creator";
import {AuthorizationStatus} from "@store/user/const";


const createAPIMiddleware = (api) => ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === `function`) {
    return action(dispatch, getState, api)
      .catch((error) => {
        const {response} = error;
        if (response.status === UNAUTHORIZED) {
          const errorParams = {
            id: nanoid(ID_LENGTH),
            type: NotificationType.ERROR,
            name: APIErrorName.UNAUTHORIZED,
            method: HTTPMethod.GET,
            title: `Authorization error`,
            text: `You should authorize`,
          };
          dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH), addNotification(errorParams));
        }
        throw error;
      });
  }
  if (Array.isArray(action)) {
    return action.filter(Boolean).map(dispatch);
  }
  return next(action);
};

export default createAPIMiddleware;
