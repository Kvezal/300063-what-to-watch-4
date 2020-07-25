import {connect} from "react-redux";

import SignIn from "@pages/sign-in/sign-in";
import {removeNotificationsByName} from "@store/notification/action-creator";
import {getNotificationsByName} from "@store/notification/selectors";
import {UserErrorNotificationName} from "@store/user/const";
import {login} from "@store/user/operation";


const mapStateToProps = (state) => ({
  errors: getNotificationsByName(state, UserErrorNotificationName.EMAIL),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (authParams) => {
    dispatch(removeNotificationsByName(UserErrorNotificationName.EMAIL));
    dispatch(login(authParams));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
