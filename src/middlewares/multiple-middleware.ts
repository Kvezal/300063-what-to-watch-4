import {IMiddleware} from "@middlewares/interface";

const multipleMiddleware: IMiddleware = ({dispatch}) => (next) => (action) => {
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