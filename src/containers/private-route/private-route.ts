import {connect} from "react-redux";

import PrivateRoute from "@components/private-route/private-route";
import {getAuthorizationStatus} from "@store/user/selector";
import {TStoreState} from "@store/interface";

import {IPrivateRouteMapStateToProps} from "./interface";


const mapStateToProps = (state: TStoreState): IPrivateRouteMapStateToProps => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect<IPrivateRouteMapStateToProps>(mapStateToProps)(PrivateRoute);
