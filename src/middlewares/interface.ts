import {Middleware, Action, AnyAction} from "redux";


interface IDispatch<TStore, TExtra, TBasicAction extends Action> {
  <T extends TBasicAction>(action: T): T;
  <TReturn>(asyncAction: IAction<TReturn, TStore, TExtra, TBasicAction> | IAction<TReturn, TStore, TExtra, TBasicAction>[]): TReturn;
}

type IAction<TReturn, TStore, TExtra, TBasicAction extends Action> = (
  dispatch: IDispatch<TStore, TExtra, TBasicAction>,
  getState: () => TStore,
  extraArgument: TExtra
) => TReturn;

type IMiddleware<TStore = {}, TBasicAction extends Action = AnyAction, TExtra = undefined> = Middleware<IDispatch<TStore, TExtra, TBasicAction>, TStore, IDispatch<TStore, TExtra, TBasicAction>>;

export {
  IDispatch,
  IAction,
  IMiddleware,
};


// import { Middleware, Action, AnyAction } from "redux";
//
//
// interface IDispatch<TStore, TExtra, TBasicAction extends Action> {
//   <T extends TBasicAction>(action: T): T;
//   <TReturn>(asyncAction: IAction<TReturn, TStore, TExtra, TBasicAction>): TReturn;
// }
//
// type IAction<TReturn, TStore, TExtra, TBasicAction extends Action> = (
//   dispatch: IDispatch<TStore, TExtra, TBasicAction>,
//   getState: () => TStore,
//   extraArgument: TExtra
// ) => TReturn;
//
// type IMiddleware<TStore = {}, TBasicAction extends Action = AnyAction, TExtra = undefined> = Middleware<IDispatch<TStore, TExtra, TBasicAction>, TStore, IDispatch<TStore, TExtra, TBasicAction>>;
//
// export {
//   IDispatch,
//   IAction,
//   IMiddleware,
// }
