import {createSelector} from "reselect";

import ENameSpace from "@store/name-space";
import {IUser} from "@common/types";
import {TStoreState} from "@store/interface";
import {EAuthorizationStatus} from "@store/user/interface";


const NAME_SPACE = ENameSpace.USER;

const getAuthorizationStatus = (state: TStoreState): EAuthorizationStatus => {
  return state[NAME_SPACE].authorizationStatus;
};

const getUser = (state: TStoreState): IUser => {
  return state[NAME_SPACE].user;
};

const getAvatar = createSelector(
    getUser,
    (user: IUser): string => {
      return user && user.avatar;
    }
);

export {
  getAuthorizationStatus,
  getUser,
  getAvatar,
};
