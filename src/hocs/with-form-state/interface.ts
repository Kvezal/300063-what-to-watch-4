export type TFormState = {
  [key: string]: number | string | boolean;
};

export interface IWithFormStateHOCState {
  formState: TFormState;
  formDisabled: boolean;
}

export interface IWithFormStateHOCInjectProps {
  initialFormState: TFormState;
  initialFormDisabled: boolean;
  formDisabled: boolean;
}
