import {combineReducers} from "redux";

import data from "./data/reducer";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
});
