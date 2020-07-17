import {AuthorizationStatus, ErrorType} from "@store/user/const";

import {addAuthorizationError, setAuthorizationStatus} from "./action-creator";


const checkAuth = () => (dispatch, getState, api) => {
  return api.get(`/login `)
    .then(() => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    });
};

const login = (authData) => (dispatch, getState, api) => {
  return api.post(`/login`, {
    email: authData.email,
    password: authData.password,
  })
    .then(() => {
      window.location.href = `/`;
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      dispatch(addAuthorizationError(ErrorType.EMAIL));
      throw error;
    });
};

export {
  checkAuth,
  login,
};
