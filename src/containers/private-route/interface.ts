import {EAuthorizationStatus} from "@store/user/interface";


export interface IPrivateRouteMapStateToProps {
  authorizationStatus: EAuthorizationStatus;
}
