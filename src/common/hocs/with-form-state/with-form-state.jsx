import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {extend} from "@common/utils";


const withFormState = (Component) => {
  class WithFormState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formState: props.initialFormState,
        formDisabled: props.initialFormDisabled,
      };
    }

    render() {
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
  }

  WithFormState.defaultProps = {
    initialFormDisabled: true,
  };

  WithFormState.propTypes = {
    initialFormState: PropTypes.any.isRequired,
    initialFormDisabled: PropTypes.bool.isRequired,
    formDisabled: PropTypes.bool.isRequired,
  };

  return WithFormState;
};

export default withFormState;
