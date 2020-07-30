import {connect} from "react-redux";

import PrivateRoute from "@components/private-route/private-route";
import {getAuthorizationStatus} from "@store/user/selector";


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
