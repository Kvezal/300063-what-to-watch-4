import {INotification} from "@store/notification/interface";
import {IUserAuthorizationParams} from "@store/user/interface";


export interface ISignInProps {
  onFormSubmit: (formState: IUserAuthorizationParams) => void;
  errors: INotification[];
  formState: IUserAuthorizationParams;
  authorizationStatus: string;
  onControlChange: (fieldName: string, value: string) => void;
}
