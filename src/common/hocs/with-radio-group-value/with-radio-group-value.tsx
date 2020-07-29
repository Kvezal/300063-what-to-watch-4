import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withRadioGroupValue = (Component) => {
  class RadioGroupValue extends PureComponent {
    constructor(props) {
      super(props);
      const {defaultValue} = props;
      this.state = {
        value: defaultValue,
      };
    }

    render() {
      const {onControlChange} = this.props;
      const {value} = this.state;
      return <Component
        value={value}
        onChange={(controlValue) => {
          this.setState({value: controlValue});
          onControlChange(controlValue);
        }}
        {...this.props}
      />;
    }
  }

  RadioGroupValue.defaultProps = {
    defaultValue: 0,
  };

  RadioGroupValue.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onControlChange: PropTypes.func.isRequired,
  };

  return RadioGroupValue;
};

export default withRadioGroupValue;
