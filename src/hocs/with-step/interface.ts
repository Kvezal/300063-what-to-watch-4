export interface IWithStepHOCState {
  step: number;
}

export interface IWithStepHOCInjectProps extends IWithStepHOCState {
  onStepChange: () => void;
  onStepReset: () => void;
}
