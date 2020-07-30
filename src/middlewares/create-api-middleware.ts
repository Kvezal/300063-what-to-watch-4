import {nanoid} from "nanoid";
import {UNAUTHORIZED} from "http-status-codes";

import {ID_LENGTH} from "@store/const";
import {EHTTPMethod, ENotificationType} from "@store/notification/interface";
import {APIErrorName} from "@services/const";
import {addNotification} from "@store/notification/action-creator";
import {setAuthorizationStatus} from "@store/user/action-creator";
import {EAuthorizationStatus} from "@store/user/interface";


const createAPIMiddleware = (api) => ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === `function`) {
    return action(dispatch, getState, api)
      .catch((error) => {
        const {response} = error;
        if (response.status === UNAUTHORIZED) {
          const notification = {
            id: nanoid(ID_LENGTH),
            type: ENotificationType.ERROR,
            name: APIErrorName.UNAUTHORIZED,
            method: EHTTPMethod.GET,
            title: `Authorization error`,
            text: `You should authorize`,
          };
          dispatch([
            setAuthorizationStatus(EAuthorizationStatus.NO_AUTH),
            addNotification(notification)
          ]);
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
