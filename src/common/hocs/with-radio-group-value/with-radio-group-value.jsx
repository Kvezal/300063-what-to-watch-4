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
      this._handleRadioChange = this._handleRadioChange.bind(this);
    }

    render() {
      const {value} = this.state;
      return <Component
        value={value}
        onChange={this._handleRadioChange}
        {...this.props}
      />;
    }

    _handleRadioChange(value) {
      const {radioRef} = this.props;
      radioRef.current = {value};
      this.setState({value});
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
    ])
  };

  return React.forwardRef((props, ref) => <RadioGroupValue radioRef={ref} {...props}/>);
};

export default withRadioGroupValue;
