import {setAuthorizationStatus} from "./action-creator";
import {EUserAction, EAuthorizationStatus} from "./interface";
import reducer from "./reducer";
import {IUser} from "@common/types";


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
          user: null,
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.AUTH,
        })
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.AUTH,
        })
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.NO_AUTH,
        })
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, {
          type: EUserAction.SET_AUTHORIZATION_STATUS,
          payload: EAuthorizationStatus.NO_AUTH,
        })
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });
  });

  test(`should set user`, () => {
    const user: IUser = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatar: `img/1.png`
    };
    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, {
          type: EUserAction.SET_USER,
          payload: user,
        })
    ).toEqual({
      user,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });
  });
});
