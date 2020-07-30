import ENameSpace from "@store/name-space";
import {IDataState, TDataAction} from "@store/data/interface";
import {INotificationState, TNotificationAction} from "@store/notification/interface";
import {IUserState, TUserAction} from "@store/user/interface";


interface IStoreReducer {
  [ENameSpace.DATA]: IDataState;
  [ENameSpace.NOTIFICATION]: INotificationState;
  [ENameSpace.USER]: IUserState;
}

type TStoreAction = TDataAction | TNotificationAction | TUserAction;

type TStoreState = IDataState | INotificationState | IUserState;

export {
  IStoreReducer,
  TStoreAction,
  TStoreState,
};
