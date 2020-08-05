import * as React from "react";
import {Subtract} from "utility-types";

import {IWithStepHOCInjectProps, IWithStepHOCState} from "./interface";

enum EStepParams {
  STARTING_STEP = 1,
  STEP_SIZE = 1,
}

const withStep = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type THOC = Subtract<TComponent, IWithStepHOCInjectProps>;

  return class WithStep extends React.PureComponent<THOC, IWithStepHOCState> {
    constructor(props) {
      super(props);

      this.state = {
        step: EStepParams.STARTING_STEP,
      };
    }

    public render() {
      const {step} = this.state;

      return <Component
        {...this.props}
        step={step}
        onStepChange={() => {
          this.setState({
            step: step + EStepParams.STEP_SIZE,
          });
        }}
        onStepReset={() => {
          this.setState({
            step: EStepParams.STARTING_STEP,
          });
        }}
      />;
    }
  };
};

export default withStep;
