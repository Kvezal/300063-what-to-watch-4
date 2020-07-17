import {setAuthorizationStatus} from "./action-creator";
import {AuthorizationStatus} from "@store/user/const";


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
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    });
};

export {
  checkAuth,
  login,
};
