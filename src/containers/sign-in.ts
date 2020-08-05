import {connect} from "react-redux";

import {withFormState, withLoading} from "@hocs/index";
import SignIn from "@pages/sign-in/sign-in";
import {removeNotificationsByName} from "@store/notification/action-creator";
import {getNotificationsByName} from "@store/notification/selectors";
import {EUserErrorNotificationName} from "@store/user/interface";
import {login} from "@store/user/operation";
import {getAuthorizationStatus} from "@store/user/selector";


const SignInWrapper = withLoading(withFormState(SignIn));

const mapStateToProps = (state, props) => ({
  errors: getNotificationsByName(state, props),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (authParams) => {
    dispatch([
      removeNotificationsByName(EUserErrorNotificationName.EMAIL),
      login(authParams)
    ]);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
