import {combineReducers} from "redux";

import data from "./data/reducer";
import notification from "./notification/reducer";
import user from "./user/reducer";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.NOTIFICATION]: notification,
  [NameSpace.USER]: user,
});
