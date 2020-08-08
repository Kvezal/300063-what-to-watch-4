import {nanoid} from "nanoid";

import EAppRoute from "@app/app-route";
import history from "@app/history";
import {adaptUser} from "@common/adapter";
import {IServerUser, IUser} from "@common/types";
import {ID_LENGTH} from "@common/consts";
import {loadFavoriteFilms} from "@store/data/operation";
import {addNotification, resetNotification} from "@store/notification/action-creator";
import {EHTTPMethod, ENotificationType, INotification} from "@store/notification/interface";

import {setAuthorizationStatus, setUser} from "./action-creator";
import {
  EAuthorizationStatus,
  EUserURLHandlerPath,
  EUserErrorNotificationName,
  IUserAuthorizationParams
} from "./interface";
import {IDispatch} from "@middlewares/interface";
import {TStoreAction, TStoreState} from "@store/interface";
import {AxiosInstance, AxiosResponse} from "axios";


const checkAuth = () => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  return api
    .get<IServerUser>(EUserURLHandlerPath.LOGIN)
    .then((response: AxiosResponse<IServerUser>): IUser => adaptUser(response.data))
    .then((user: IUser) => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(EAuthorizationStatus.AUTH),
      ]);
    })
    .catch(() => {
      dispatch(setAuthorizationStatus(EAuthorizationStatus.NO_AUTH));
    });
};

const login = (authData: IUserAuthorizationParams) => (
    dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>,
    getState: () => TStoreState,
    api: AxiosInstance
): Promise<void> => {
  return api
    .post<IServerUser>(EUserURLHandlerPath.LOGIN, {
      email: authData.email,
      password: authData.password,
    })
    .then((response: AxiosResponse<IServerUser>): IUser => adaptUser(response.data))
    .then((user: IUser): void => {
      dispatch([
        setUser(user),
        setAuthorizationStatus(EAuthorizationStatus.AUTH),
        resetNotification(),
        loadFavoriteFilms()
      ]);
      history.push(EAppRoute.ROOT);
    })
    .catch(() => {
      const notification: INotification = {
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
