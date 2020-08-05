import * as React from "react";
import {Subtract} from "utility-types";

import {extend} from "@common/utils";

import {IWithFormStateHOCInjectProps, IWithFormStateHOCState} from "./interface";


const withFormState = (Component) => {
  type TComponentProps = React.ComponentProps<typeof Component>;
  type THOC = Subtract<TComponentProps, IWithFormStateHOCInjectProps>

  return class WithFormState extends React.PureComponent<THOC, IWithFormStateHOCState> {
    constructor(props) {
      super(props);

      this.state = {
        formState: props.initialFormState,
        formDisabled: props.initialFormDisabled,
      };
    }

    public render() {
      const {formDisabled: formDisabledProp} = this.props;
      const {formState, formDisabled} = this.state;
      return <Component
        {...this.props}
        formState={formState}
        formDisabled={formDisabledProp || formDisabled}
        onControlChange={(field, value) => {
          this.setState((prev) => ({
            formState: extend(prev.formState, {
              [field]: value,
            }),
          }));
        }}
        onDisabledChange={(disabled) => {
          this.setState(() => ({
            formDisabled: disabled,
          }));
        }}
      />;
    }
  };
};

export default withFormState;
