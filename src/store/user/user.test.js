import {setAuthorizationStatus} from "./action-creator";
import ActionType from "./action-type";
import {AuthorizationStatus, ErrorType} from "./const";
import reducer from "./reducer";


describe(`UserReducer`, () => {
  test.each(Object.values(AuthorizationStatus))(`set authorization status should return correct object`, (status) => {
    expect(setAuthorizationStatus(status)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status
    });
  });

  test(`should change authorizationStatus`, () => {
    expect(
      reducer({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(
      reducer({
        authorizationStatus: AuthorizationStatus.AUTH,
      }, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(
      reducer({
        authorizationStatus: AuthorizationStatus.AUTH,
      }, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.NO_AUTH,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(
      reducer({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.NO_AUTH,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  test(`should unauthorize user`, () => {
    expect(
        reducer({
        authorizationStatus: AuthorizationStatus.AUTH,
      }, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.NO_AUTH,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: ErrorType.NONE,
    });
  });
});
