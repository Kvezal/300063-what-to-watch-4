import * as React from "react";


interface IWithStep {
  step: number;
}

const withStep = (Component) => {
  return class WithStep extends React.PureComponent<IWithStep, IWithStep> {
    static defaultValue: Partial<IWithStep> = {
      step: 1,
    };

    constructor(props) {
      super(props);

      this.state = {
        step: props.step,
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
