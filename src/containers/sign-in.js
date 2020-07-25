import {connect} from "react-redux";

import SignIn from "@pages/sign-in/sign-in";
import {login} from "@store/user/operation";
import {getError} from "@store/user/selector";

const mapStateToProps = (state) => ({
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (authParams) => {
    dispatch(login(authParams));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
