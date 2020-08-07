import {IMiddleware} from "@middlewares/interface";
import {TStoreAction, TStoreState} from "@store/interface";
import {AxiosInstance} from "axios";


const multipleMiddleware: IMiddleware<TStoreState, TStoreAction, AxiosInstance> = ({dispatch}) => (next) => (action) => {
  if (Array.isArray(action)) {
    return action.reduce((actions, item) => {
      if (item) {
        actions.push(dispatch(item));
      }
      return actions;
    }, []);
  }
  return next(action);
};

export default multipleMiddleware;
