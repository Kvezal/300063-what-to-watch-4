import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withStep = (Component) => {
  class WithStep extends PureComponent {
    constructor(props) {
      super(props);

      this._handleStepChange = this._handleStepChange.bind(this);
      this.state = {
        step: props.step,
      };
    }

    render() {
      const {step} = this.state;

      return <Component
        {...this.props}
        step={step}
        onStepChange={this._handleStepChange}
      />;
    }

    _handleStepChange() {
      const {step} = this.state;
      this.setState({
        step: step + 1
      });
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
