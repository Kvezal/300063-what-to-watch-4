export interface IWithStepHOCState {
  step: number;
}

export interface IWithStepHOCInjectProps {
  onStepChange: () => void;
  onStepReset: () => void;
}
