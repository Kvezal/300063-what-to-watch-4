import {Middleware, Action, AnyAction} from "redux";


export interface IDispatch<TStore, TExtra, TBasicAction extends Action> {
  <T>(asyncAction: TBasicAction | IAction<T, TStore, TExtra, TBasicAction> | (TBasicAction | IAction<T, TStore, TExtra, TBasicAction>)[]): T;
}

export type IAction<TReturn, TStore, TExtra, TBasicAction extends Action> = (
  dispatch: IDispatch<TStore, TExtra, TBasicAction>,
  getState: () => TStore,
  extraArgument: TExtra
) => TReturn;

export type IMiddleware<TStore = {}, TBasicAction extends Action = AnyAction, TExtra = undefined> = Middleware<IDispatch<TStore, TExtra, TBasicAction>, TStore>;
