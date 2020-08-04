import {createSelector} from "reselect";

import NameSpace from "@store/name-space";


const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getUser = (state) => {
  return state[NAME_SPACE].user;
};

const getAvatar = createSelector(
    getUser,
    (user) => {
      return user && user.avatar;
    }
);

export {
  getAuthorizationStatus,
  getUser,
  getAvatar,
};
