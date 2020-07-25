import ActionType from "./action-type";


const setAuthorizationStatus = (status) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: status,
});

const addAuthorizationError = (error) => ({
  type: ActionType.ADD_AUTHORIZATION_ERROR,
  payload: error
});

export {
  setAuthorizationStatus,
  addAuthorizationError
};
