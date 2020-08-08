import {Action, ActionCreatorsMapObject, AnyAction, Dispatch, Middleware} from "redux";


export interface IDispatch<TStore, TExtra, TBasicAction extends Action> {
  <TReturn>(asyncAction: TBasicAction | IAction<TReturn, TStore, TExtra, TBasicAction> | (TBasicAction | IAction<TReturn, TStore, TExtra, TBasicAction>)[]): TReturn;
}

export type IAction<TReturn, TStore, TExtra, TBasicAction extends Action> = (
  dispatch: IDispatch<TStore, TExtra, TBasicAction>,
  getState: () => TStore,
  extraArgument: TExtra
) => TReturn;

export type IMiddleware<TStore = {}, TBasicAction extends Action = AnyAction, TExtra = undefined> = Middleware<IDispatch<TStore, TExtra, TBasicAction>, TStore>;

// eslint-disable-next-line
declare module 'redux' {
  /**
   * Overload for bindActionCreators redux function, returns expects responses
   * from thunk actions
   */
  function bindActionCreators<M extends ActionCreatorsMapObject<any>>(
    actionCreators: M,
    dispatch: Dispatch
  ): {
    [N in keyof M]: ReturnType<M[N]> extends IAction<any, any, any, any>
      ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
      : M[N]
  };
}
