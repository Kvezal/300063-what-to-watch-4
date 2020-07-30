import {setAuthorizationStatus} from "./action-creator";
import {EUserAction, EAuthorizationStatus} from "./interface";
import reducer from "./reducer";


describe(`UserReducer`, () => {
  test.each(Object.values(EAuthorizationStatus))(`set authorization status should return correct object`, (status) => {
    expect(setAuthorizationStatus(status)).toEqual({
      type: EUserAction.SET_AUTHORIZATION_STATUS,
      payload: status
    });
  });

  test(`should change authorizationStatus`, () => {
    expect(
        reducer({
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.AUTH,
        })
    ).toEqual({
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    expect(
        reducer({
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.AUTH,
        })
    ).toEqual({
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    expect(
        reducer({
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.NO_AUTH,
        })
    ).toEqual({
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });

    expect(
        reducer({
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.NO_AUTH,
        })
    ).toEqual({
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });
  });

  test(`should unauthorize user`, () => {
    expect(
        reducer({
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.NO_AUTH,
        })
    ).toEqual({
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });
  });
});
