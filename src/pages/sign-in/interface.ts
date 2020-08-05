import {INotification} from "@store/notification/interface";


export interface ISignInFormState {
  email: string;
  password: string;
}

export interface ISignInProps {
  onFormSubmit: (formState: ISignInFormState) => void;
  errors: INotification[];
  formState: ISignInFormState;
  authorizationStatus: string;
  onControlChange: (fieldName: string, value: string) => void;
}
