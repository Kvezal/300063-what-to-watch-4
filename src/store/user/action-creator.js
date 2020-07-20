import {ActionType} from "./const";


const setAuthorizationStatus = (payload) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload,
});

const setUser = (payload) => ({
  type: ActionType.SET_USER,
  payload
});

export {
  setAuthorizationStatus,
  setUser,
};
