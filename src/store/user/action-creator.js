import ActionType from "./action-type";


const setAuthorizationStatus = (status) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: status,
});

export {
  setAuthorizationStatus,
};
