import * as React from "react";
import {Subtract} from "utility-types";


interface IState {
  value: string | number;
}

interface IWithRadioGroupValueHOCInjectProps {
  defaultValue: string | number;
  onControlChange: (controlValue: string | number) => string | number;
  value: string;
  onChange: (fieldName: string) => void;
}

const withRadioGroupValue = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type THOC = Subtract<TComponent, IWithRadioGroupValueHOCInjectProps>;

  class RadioGroupValue extends React.PureComponent<THOC, IState> {
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

  return RadioGroupValue;
};

export default withRadioGroupValue;
