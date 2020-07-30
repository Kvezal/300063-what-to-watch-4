import {createSelector} from "reselect";

import ENameSpace from "@store/name-space";
import {UserInterface} from "@common/types";
import {TStoreState} from "@store/interface";


const NAME_SPACE = ENameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getUser = (state: TStoreState) => {
  return state[NAME_SPACE].user;
};

const getAvatar = createSelector(
    getUser,
    (user: UserInterface): string => {
      return user && user.avatar;
    }
);

export {
  getAuthorizationStatus,
  getUser,
  getAvatar,
};
