import * as React from "react";
import {Subtract} from "utility-types";

import {IWithStepHOCInjectProps, IWithStepHOCState} from "./interface";


const withStep = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type THOC = Subtract<TComponent, IWithStepHOCInjectProps>;

  return class WithStep extends React.PureComponent<THOC, IWithStepHOCState> {
    constructor(props) {
      super(props);

      this.state = {
        step: props.step || 1,
      };
    }

    render() {
      const {step} = this.state;
      const {step: defaultStep} = this.props;

      return <Component
        {...this.props}
        step={step}
        onStepChange={() => {
          this.setState({
            step: step + 1,
          });
        }}
        onStepReset={() => {
          this.setState({
            step: defaultStep,
          });
        }}
      />;
    }
  };
};

export default withStep;
