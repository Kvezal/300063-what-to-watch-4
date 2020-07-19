import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withRadioGroupValue = (Component) => {
  class RadioGroupValue extends PureComponent {
    constructor(props) {
      super(props);
      const {defaultValue, radioRef} = props;
      this.state = {
        value: defaultValue,
      };
      radioRef.current = {
        value: defaultValue
      };
    }

    render() {
      const {onControlChange, radioRef} = this.props;
      const {value} = this.state;
      return <Component
        value={value}
        onChange={(controlValue) => {
          radioRef.current = {value: controlValue};
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
    radioRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ]),
    onControlChange: PropTypes.func.isRequired,
  };

  return React.forwardRef((props, ref) => <RadioGroupValue radioRef={ref} {...props}/>);
};

export default withRadioGroupValue;
