import {AxiosInstance} from "axios";
import {UNAUTHORIZED} from "http-status-codes";

import {setAuthorizationStatus} from "@store/user/action-creator";
import {EAuthorizationStatus} from "@store/user/interface";
import {TStoreAction, TStoreState} from "@store/interface";
import {IMiddleware} from "@middlewares/interface";


const createAPIMiddleware = (api: AxiosInstance): IMiddleware<TStoreState, TStoreAction, AxiosInstance> =>
  ({dispatch, getState}) => (next) => (action) => {
    if (typeof action === `function`) {
      return action(dispatch, getState, api)
        .catch((error) => {
          const {response} = error;
          if (response.status === UNAUTHORIZED) {
            dispatch(setAuthorizationStatus(EAuthorizationStatus.NO_AUTH));
          }
          throw error;
        });
    }
    return next(action);
  };

export default createAPIMiddleware;
