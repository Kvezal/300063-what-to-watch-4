export interface IWithRadioGroupValueHOCState {
  value: string | number;
}

export interface IWithRadioGroupValueHOCInjectProps {
  defaultValue: string | number;
  onControlChange: (controlValue: string | number) => string | number;
  value: string;
  onChange: (fieldName: string) => void;
}
