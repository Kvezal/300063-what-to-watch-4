import {IUser} from "@common/types";

import {setAuthorizationStatus} from "./action-creator";
import {EUserAction, EAuthorizationStatus, ISetAuthorizationStatus, ISetUser} from "./interface";
import reducer from "./reducer";


describe(`UserReducer`, () => {
  test.each(Object.values(EAuthorizationStatus))(`set authorization status should return correct object`, (status) => {
    expect(setAuthorizationStatus(status)).toEqual({
      type: EUserAction.SET_AUTHORIZATION_STATUS,
      payload: status
    });
  });

  test(`should change authorizationStatus`, () => {
    const setAuthorizationStatusAction: ISetAuthorizationStatus = {
      type: EUserAction.SET_AUTHORIZATION_STATUS,
      payload: EAuthorizationStatus.AUTH,
    };

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, setAuthorizationStatusAction)
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, setAuthorizationStatusAction)
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });

    const setNotAuthorizationStatusAction: ISetAuthorizationStatus = {
      type: EUserAction.SET_AUTHORIZATION_STATUS,
      payload: EAuthorizationStatus.NO_AUTH,
    };

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, setNotAuthorizationStatusAction)
    ).toEqual({
      user: null,
      authorizationStatus: EAuthorizationStatus.NO_AUTH,
    });

    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.NO_AUTH,
        }, setNotAuthorizationStatusAction)
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
    const setUserAction: ISetUser = {
      type: EUserAction.SET_USER,
      payload: user,
    };
    expect(
        reducer({
          user: null,
          authorizationStatus: EAuthorizationStatus.AUTH,
        }, setUserAction)
    ).toEqual({
      user,
      authorizationStatus: EAuthorizationStatus.AUTH,
    });
  });
});
