import {INotification} from "@store/notification/interface";
import {EAuthorizationStatus, IUserAuthorizationParams} from "@store/user/interface";


export interface ISignInMapStateToProps {
  errors: INotification[];
  authorizationStatus: EAuthorizationStatus;
}

export interface ISignInMapDispatchToProp {
  onFormSubmit: (authParams: IUserAuthorizationParams) => void;
}
