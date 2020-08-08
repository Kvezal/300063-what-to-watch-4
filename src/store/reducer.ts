import {combineReducers} from "redux";

import ENameSpace from "./name-space";
import data from "./data/reducer";
import notification from "./notification/reducer";
import user from "./user/reducer";
import {IStoreReducer} from "./interface";


export default combineReducers<IStoreReducer>({
  [ENameSpace.DATA]: data,
  [ENameSpace.NOTIFICATION]: notification,
  [ENameSpace.USER]: user,
});
