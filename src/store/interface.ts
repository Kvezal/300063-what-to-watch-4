import ENameSpace from "@store/name-space";
import {IDataState, TDataAction} from "@store/data/interface";
import {INotificationState, TNotificationAction} from "@store/notification/interface";
import {IUserState, TUserAction} from "@store/user/interface";


export interface IStoreReducer {
  [ENameSpace.DATA]: IDataState;
  [ENameSpace.NOTIFICATION]: INotificationState;
  [ENameSpace.USER]: IUserState;
}

export type TStoreAction = TDataAction | TNotificationAction | TUserAction;

export type TStoreState = IDataState | INotificationState | IUserState;
