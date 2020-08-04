import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withStep = (Component) => {
  class WithStep extends PureComponent {
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
  }

  WithStep.defaultProps = {
    step: 1,
  };

  WithStep.propTypes = {
    step: PropTypes.number.isRequired,
  };

  return WithStep;
};

export default withStep;
