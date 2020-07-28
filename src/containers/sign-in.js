import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import SignIn from "@pages/sign-in/sign-in";
import {removeNotificationsByName} from "@store/notification/action-creator";
import {getNotificationsByName} from "@store/notification/selectors";
import {UserErrorNotificationName} from "@store/user/const";
import {login} from "@store/user/operation";
import {getAuthorizationStatus} from "@store/user/selector";


const SignInWrapper = withLoading(SignIn);

const mapStateToProps = (state) => ({
  errors: getNotificationsByName(state, UserErrorNotificationName.EMAIL),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (authParams) => {
    dispatch(removeNotificationsByName(UserErrorNotificationName.EMAIL));
    dispatch(login(authParams));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
