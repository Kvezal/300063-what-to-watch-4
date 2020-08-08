import {AxiosInstance} from "axios";
import {connect} from "react-redux";

import {withFormState, withLoading} from "@hocs/index";
import SignIn from "@pages/sign-in/sign-in";
import {ISignInProps} from "@pages/sign-in/interface";
import {removeNotificationsByName} from "@store/notification/action-creator";
import {getNotificationsByName} from "@store/notification/selectors";
import {EUserErrorNotificationName, IUserAuthorizationParams} from "@store/user/interface";
import {login} from "@store/user/operation";
import {getAuthorizationStatus} from "@store/user/selector";
import {TStoreAction, TStoreState} from "@store/interface";
import {IDispatch} from "@middlewares/interface";

import {ISignInMapDispatchToProp, ISignInMapStateToProps} from "./interface";


const SignInWrapper = withLoading(withFormState(SignIn));

const mapStateToProps = (state: TStoreState, props: ISignInProps): ISignInMapStateToProps => ({
  errors: getNotificationsByName(state, props),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>): ISignInMapDispatchToProp => ({
  onFormSubmit: (authParams: IUserAuthorizationParams) => {
    dispatch([
      removeNotificationsByName(EUserErrorNotificationName.EMAIL),
      login(authParams)
    ]);
  }
});

export default connect<ISignInMapStateToProps, ISignInMapDispatchToProp>(mapStateToProps, mapDispatchToProps)(SignInWrapper);
