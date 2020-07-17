import {createSelector} from "reselect";

import {AuthorizationStatus} from "@store/user/const";

import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getError = (state) => {
  return state[NAME_SPACE].error;
};

const getAuthorizedFlag = createSelector(
    getAuthorizationStatus,
    (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH
);

export {
  getAuthorizationStatus,
  getError,
  getAuthorizedFlag,
};
