import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {extend} from "@common/utils";


const withFormState = (Component) => {
  class WithFormState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formState: props.initialFormState,
        formDisabled: props.formDisabled
      };
    }

    render() {
      const {formState, formDisabled} = this.state;
      return <Component
        formState={formState}
        formDisabled={formDisabled}
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
        {...this.props}
      />;
    }
  }

  WithFormState.propTypes = {
    initialFormState: PropTypes.any.isRequired,
    formDisabled: PropTypes.bool.isRequired,
  };

  return WithFormState;
};

export default withFormState;
