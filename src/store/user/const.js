import NameSpace from "@store/name-space";


const NAME_SPACE = NameSpace.DATA;

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SET_USER: `SET_USER`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const UserErrorNotificationName = {
  EMAIL: `${NAME_SPACE}:EMAIL`,
};

export {
  ActionType,
  AuthorizationStatus,
  UserErrorNotificationName,
};
