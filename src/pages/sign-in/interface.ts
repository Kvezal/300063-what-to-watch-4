import {INotification} from "@store/notification/interface";


interface ISignInFormState {
  email: string;
  password: string;
}

interface ISignInProps {
  onFormSubmit: (formState: ISignInFormState) => void;
  errors: INotification[];
  formState: ISignInFormState;
  authorizationStatus: string;
  onControlChange: (fieldName: string, value: string) => void;
}

export {
  ISignInFormState,
  ISignInProps,
};
