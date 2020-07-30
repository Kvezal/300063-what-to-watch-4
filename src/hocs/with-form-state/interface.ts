type TFormState = {
  [key: string]: number | string | boolean;
};

interface IWithFormStateHOCState {
  formState: TFormState;
  formDisabled: boolean;
}

interface IWithFormStateHOCInjectProps {
  initialFormState: TFormState;
  initialFormDisabled: boolean;
  formDisabled: boolean;
}

export {
  TFormState,
  IWithFormStateHOCState,
  IWithFormStateHOCInjectProps,
};
